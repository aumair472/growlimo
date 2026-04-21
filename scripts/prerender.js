#!/usr/bin/env node

import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getPrerenderStaticRoutes,
  normalizeBlogCacheEntries,
} from './lib/routeManifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const DEFAULT_PORT = Number(process.env.PRERENDER_PORT || 4173);
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 4);
const NAVIGATION_TIMEOUT_MS = Number(process.env.PRERENDER_NAV_TIMEOUT || 45000);
const READY_TIMEOUT_MS = Number(process.env.PRERENDER_READY_TIMEOUT || 20000);
const MAX_ATTEMPTS = Number(process.env.PRERENDER_MAX_ATTEMPTS || 3);
const FAILURE_LOG_FILE = path.join(DIST_DIR, 'prerender-failures.json');
const BLOG_CACHE_INDEX_FILE = path.resolve(__dirname, '../public/blog-cache/index.json');
const CASE_STUDIES_FILE = path.resolve(__dirname, '../src/data/caseStudies.json');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) return null;

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.warn(`[prerender] Failed to parse ${path.basename(filePath)}: ${error.message}`);
    return null;
  }
}

function getRoutes() {
  const routes = new Set(getPrerenderStaticRoutes());
  const blogEntries = normalizeBlogCacheEntries(readJsonIfExists(BLOG_CACHE_INDEX_FILE));
  const caseStudies = readJsonIfExists(CASE_STUDIES_FILE)?.caseStudies || [];

  blogEntries.forEach((post) => {
    if (post.slug) routes.add(`/blog/${post.slug}`);
  });

  caseStudies.forEach((caseStudy) => {
    if (caseStudy.slug) routes.add(`/case-studies/${caseStudy.slug}`);
  });

  return [...routes];
}

async function startServer() {
  const createServer = () =>
    http.createServer((req, res) => {
      let filePath = path.join(
        DIST_DIR,
        req.url === '/' ? 'index.html' : req.url.split('?')[0]
      );

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(DIST_DIR, 'index.html');
      }

      const ext = path.extname(filePath);
      const contentTypes = {
        '.avif': 'image/avif',
        '.br': 'application/octet-stream',
        '.css': 'text/css',
        '.gif': 'image/gif',
        '.html': 'text/html',
        '.jpeg': 'image/jpeg',
        '.jpg': 'image/jpeg',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.mjs': 'text/javascript',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
      };

      try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, {
          'Content-Length': content.length,
          'Content-Type': contentTypes[ext] || 'application/octet-stream',
        });
        res.end(content);
      } catch (error) {
        res.writeHead(500);
        res.end(`Server error: ${error.message}`);
      }
    });

  for (let port = DEFAULT_PORT; port < DEFAULT_PORT + 10; port += 1) {
    const server = createServer();

    try {
      await new Promise((resolve, reject) => {
        server.once('error', reject);
        server.listen(port, () => {
          server.off('error', reject);
          resolve();
        });
      });

      const siteUrl = `http://localhost:${port}`;
      console.log(`[prerender] Serving dist on ${siteUrl}`);
      return { server, siteUrl };
    } catch (error) {
      if (error.code !== 'EADDRINUSE') throw error;
      console.warn(`[prerender] Port ${port} busy, trying next port`);
    }
  }

  throw new Error('Unable to start preview server for prerender');
}

async function waitForRouteToSettle(page) {
  await page.waitForFunction(
    () => {
      const root = document.getElementById('root');
      return Boolean(root && root.innerHTML.trim().length > 100);
    },
    { timeout: READY_TIMEOUT_MS }
  );

  await page.evaluate(
    (timeoutMs) =>
      new Promise((resolve) => {
        let done = false;

        const finish = () => {
          if (done) return;
          done = true;
          resolve();
        };

        document.addEventListener('prerender-ready', finish, { once: true });
        setTimeout(finish, timeoutMs);
      }),
    READY_TIMEOUT_MS
  );
}

function validateHtml(route, html) {
  const checks = [
    ['title', /<title>[^<]+<\/title>/i],
    ['meta description', /<meta[^>]+name="description"[^>]+content="[^"]+/i],
    ['canonical', /<link[^>]+rel="canonical"[^>]+href="[^"]+/i],
    ['OG title', /<meta[^>]+property="og:title"[^>]+content="[^"]+/i],
    ['JSON-LD', /<script[^>]+type="application\/ld\+json">[\s\S]+?<\/script>/i],
    ['H1', /<h1[\s>][\s\S]*?<\/h1>/i],
    ['H2', /<h2[\s>][\s\S]*?<\/h2>/i],
    ['paragraph', /<p[\s>][\s\S]*?<\/p>/i],
  ];

  const missing = checks.filter(([, pattern]) => !pattern.test(html)).map(([label]) => label);

  if (missing.length) {
    throw new Error(`Missing required prerender output: ${missing.join(', ')}`);
  }

  if (/<div id="root"><\/div>/.test(html)) {
    throw new Error('Detected empty root div in prerendered HTML');
  }

  console.log(`[prerender] Validated ${route}`);
}

function stripNonCriticalPreloads(html) {
  return html.replace(/<link[^>]+rel="modulepreload"[^>]*>/gi, '');
}

async function renderRoute(browser, siteUrl, route, attempt = 1) {
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(NAVIGATION_TIMEOUT_MS);
  page.setDefaultTimeout(READY_TIMEOUT_MS);

  page.on('pageerror', (error) => {
    console.error(`[prerender][pageerror] ${route}: ${error.message}`);
  });

  page.on('response', (response) => {
    if (response.status() >= 400) {
      console.warn(`[prerender][response] ${route}: ${response.status()} ${response.url()}`);
    }
  });

  await page.evaluateOnNewDocument(() => {
    window.__PRERENDER_INJECTED = true;
  });

  try {
    console.log(`[prerender] Rendering ${route} (attempt ${attempt}/${MAX_ATTEMPTS})`);
    await page.goto(`${siteUrl}${route}`, {
      timeout: NAVIGATION_TIMEOUT_MS,
      waitUntil: 'networkidle2',
    });
    await waitForRouteToSettle(page);

    let html = await page.content();
    html = stripNonCriticalPreloads(html);
    html = html.replace(/<!-- prerendered -->/g, '');
    html = html.replace('</body>', '<!-- prerendered --></body>');

    validateHtml(route, html);

    const outputDir =
      route === '/' ? DIST_DIR : path.join(DIST_DIR, route.replace(/^\/+/, ''));
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, 'index.html'), html);
    console.log(`[prerender] Saved ${route}`);

    return { route, success: true };
  } catch (error) {
    if (attempt < MAX_ATTEMPTS) {
      const backoffMs = attempt * 2000;
      console.warn(
        `[prerender] Retry scheduled for ${route} after ${error.message} (${backoffMs}ms)`
      );
      await sleep(backoffMs);
      return renderRoute(browser, siteUrl, route, attempt + 1);
    }

    return { route, success: false, error: error.message };
  } finally {
    await page.close();
  }
}

async function mapWithConcurrency(items, limit, iterator) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (true) {
      const currentIndex = cursor;
      cursor += 1;
      if (currentIndex >= items.length) return;
      results[currentIndex] = await iterator(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => worker())
  );

  return results;
}

async function main() {
  const routes = getRoutes();
  console.log(`[prerender] Starting ${routes.length} routes with concurrency ${CONCURRENCY}`);

  const { server, siteUrl } = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const results = await mapWithConcurrency(routes, CONCURRENCY, (route) =>
      renderRoute(browser, siteUrl, route)
    );

    const failures = results.filter((result) => !result.success);

    if (failures.length) {
      fs.writeFileSync(FAILURE_LOG_FILE, JSON.stringify(failures, null, 2));
      console.error(`[prerender] Failed routes: ${failures.length}`);
      failures.forEach((failure) => {
        console.error(`  ${failure.route}: ${failure.error}`);
      });
      process.exitCode = 1;
      return;
    }

    if (fs.existsSync(FAILURE_LOG_FILE)) {
      fs.rmSync(FAILURE_LOG_FILE, { force: true });
    }

    console.log('[prerender] Completed successfully');
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((error) => {
  console.error('[prerender] Fatal error:', error);
  process.exit(1);
});

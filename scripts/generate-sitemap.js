#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getSitemapMeta,
  getStaticPublicRoutes,
  normalizeBlogCacheEntries,
  ROBOTS_DISALLOW_PATHS,
} from './lib/routeManifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = process.env.VITE_API_URL || 'https://api.growlimo.com';
const SITE_URL = process.env.VITE_SITE_URL || 'https://growlimo.com';
const OUTPUT_DIR = path.join(__dirname, '../public');
const SITEMAP_FILE = path.join(OUTPUT_DIR, 'sitemap.xml');
const ROBOTS_FILE = path.join(OUTPUT_DIR, 'robots.txt');
const BLOG_CACHE_DIR = path.join(OUTPUT_DIR, 'blog-cache');
const BLOG_CACHE_INDEX_FILE = path.join(BLOG_CACHE_DIR, 'index.json');
const BLOG_CACHE_POSTS_DIR = path.join(BLOG_CACHE_DIR, 'posts');
const LEGACY_BLOG_CACHE_FILE = path.join(OUTPUT_DIR, 'blog-cache.json');
const LOCAL_BLOG_CACHE_FILE = path.join(__dirname, '../.blog-cache-full.json');
const CASE_STUDIES_FILE = path.join(__dirname, '../src/data/caseStudies.json');
const BLOG_PAGE_LIMIT = 100;
const REQUEST_TIMEOUT_MS = 12000;
const MAX_RETRIES = 3;

const ensureDir = (dirPath) => {
  fs.mkdirSync(dirPath, { recursive: true });
};

const trailingSlash = (url) => url.replace(/\/?$/, '/');

const xmlEncode = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function createAbortSignal(timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  return { signal: controller.signal, clear: () => clearTimeout(timeout) };
}

async function fetchJsonWithRetry(url, attempt = 1) {
  const { signal, clear } = createAbortSignal(REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, { signal });
    clear();

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  } catch (error) {
    clear();

    if (attempt >= MAX_RETRIES) {
      throw error;
    }

    const delayMs = attempt * 1500;
    console.warn(
      `[sitemap] Retry ${attempt}/${MAX_RETRIES - 1} for ${url} after ${error.message}`
    );
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return fetchJsonWithRetry(url, attempt + 1);
  }
}

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) return null;

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.warn(`[sitemap] Failed to parse ${path.basename(filePath)}: ${error.message}`);
    return null;
  }
}

async function fetchBlogPostsFromApi() {
  const posts = [];
  let currentPage = 1;
  let totalPages = 1;

  do {
    const data = await fetchJsonWithRetry(
      `${API_URL}/api/blog?page=${currentPage}&limit=${BLOG_PAGE_LIMIT}`
    );

    if (!data?.success || !Array.isArray(data.data)) {
      throw new Error(`Unexpected blog API payload on page ${currentPage}`);
    }

    posts.push(...data.data);
    totalPages = data.meta?.totalPages || currentPage;
    currentPage += 1;
  } while (currentPage <= totalPages);

  return posts;
}

function getFallbackBlogPosts() {
  const localPosts = readJsonIfExists(LOCAL_BLOG_CACHE_FILE);
  if (Array.isArray(localPosts) && localPosts.length) {
    console.log(`[sitemap] Restored ${localPosts.length} blog posts from local cache`);
    return localPosts;
  }

  const legacyPosts = readJsonIfExists(LEGACY_BLOG_CACHE_FILE);
  const normalizedLegacyPosts = normalizeBlogCacheEntries(legacyPosts);
  if (normalizedLegacyPosts.length) {
    console.log(
      `[sitemap] Restored ${normalizedLegacyPosts.length} blog posts from legacy public cache`
    );
    return normalizedLegacyPosts;
  }

  const existingIndex = readJsonIfExists(BLOG_CACHE_INDEX_FILE);
  const normalizedIndex = normalizeBlogCacheEntries(existingIndex);
  if (normalizedIndex.length) {
    console.log(`[sitemap] Restored ${normalizedIndex.length} blog posts from index cache`);
    return normalizedIndex;
  }

  return [];
}

function sortPosts(posts = []) {
  return [...posts].sort((a, b) => {
    const aDate = new Date(a.updatedAt || a.publishedAt || a.createdAt || 0).getTime();
    const bDate = new Date(b.updatedAt || b.publishedAt || b.createdAt || 0).getTime();
    return bDate - aDate;
  });
}

function createBlogSummary(post) {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    tags: Array.isArray(post.tags) ? post.tags : [],
    featuredImageUrl: post.featuredImageUrl || post.image || '',
    publishedAt: post.publishedAt || post.createdAt || null,
    updatedAt: post.updatedAt || post.createdAt || null,
    createdAt: post.createdAt || null,
    author:
      typeof post.author === 'string' ? post.author : post.author?.name || 'GrowLimo Team',
  };
}

function writeBlogCache(posts) {
  ensureDir(BLOG_CACHE_DIR);
  fs.rmSync(BLOG_CACHE_POSTS_DIR, { recursive: true, force: true });
  ensureDir(BLOG_CACHE_POSTS_DIR);

  const normalizedPosts = normalizeBlogCacheEntries(posts).filter((post) => post.slug);
  const sortedPosts = sortPosts(normalizedPosts);
  const index = sortedPosts.map(createBlogSummary);

  fs.writeFileSync(LOCAL_BLOG_CACHE_FILE, JSON.stringify(sortedPosts, null, 2));
  fs.writeFileSync(BLOG_CACHE_INDEX_FILE, JSON.stringify(index, null, 2));

  sortedPosts.forEach((post) => {
    fs.writeFileSync(
      path.join(BLOG_CACHE_POSTS_DIR, `${post.slug}.json`),
      JSON.stringify(post, null, 2)
    );
  });

  if (fs.existsSync(LEGACY_BLOG_CACHE_FILE)) {
    fs.rmSync(LEGACY_BLOG_CACHE_FILE, { force: true });
  }

  console.log(`[sitemap] Wrote chunked blog cache for ${sortedPosts.length} posts`);
  return index;
}

function getCaseStudiesFromLocal() {
  const data = readJsonIfExists(CASE_STUDIES_FILE);
  return Array.isArray(data?.caseStudies) ? data.caseStudies : [];
}

function generateSitemapXml(staticRoutes, blogPosts, caseStudies) {
  const currentDate = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  const appendAlternateLinks = (url) => {
    xml += `    <xhtml:link rel="alternate" hreflang="en-us" href="${url}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />\n`;
  };

  staticRoutes.forEach((route) => {
    const meta = getSitemapMeta(route);
    const loc = trailingSlash(xmlEncode(`${SITE_URL}${route === '/' ? '' : route}`));
    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    appendAlternateLinks(loc);
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${meta.changefreq}</changefreq>\n`;
    xml += `    <priority>${meta.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  blogPosts.forEach((post) => {
    if (!post.slug) return;

    const lastmod = new Date(
      post.updatedAt || post.publishedAt || post.createdAt || currentDate
    )
      .toISOString()
      .split('T')[0];
    const loc = trailingSlash(xmlEncode(`${SITE_URL}/blog/${post.slug}`));

    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    appendAlternateLinks(loc);
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  caseStudies.forEach((caseStudy) => {
    if (!caseStudy.slug) return;
    const loc = trailingSlash(xmlEncode(`${SITE_URL}/case-studies/${caseStudy.slug}`));

    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    appendAlternateLinks(loc);
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

function generateRobotsTxt() {
  const lines = ['User-agent: *', 'Allow: /'];

  ROBOTS_DISALLOW_PATHS.forEach((route) => {
    lines.push(`Disallow: ${route.replace(/\/?$/, '/')}`);
  });

  lines.push('', `Sitemap: ${SITE_URL}/sitemap.xml`, '');
  return lines.join('\n');
}

async function main() {
  console.log(`[sitemap] API URL: ${API_URL}`);
  console.log(`[sitemap] Site URL: ${SITE_URL}`);

  ensureDir(OUTPUT_DIR);

  let blogPosts;
  try {
    blogPosts = await fetchBlogPostsFromApi();
    console.log(`[sitemap] Fetched ${blogPosts.length} blog posts from API`);
  } catch (error) {
    console.warn(`[sitemap] Blog API unavailable, using cache fallback: ${error.message}`);
    blogPosts = getFallbackBlogPosts();
  }

  const blogIndex = writeBlogCache(blogPosts);
  const staticRoutes = getStaticPublicRoutes();
  const caseStudies = getCaseStudiesFromLocal();

  fs.writeFileSync(
    SITEMAP_FILE,
    generateSitemapXml(staticRoutes, blogIndex, caseStudies),
    'utf8'
  );
  fs.writeFileSync(ROBOTS_FILE, generateRobotsTxt(), 'utf8');

  console.log(`[sitemap] Generated ${path.relative(process.cwd(), SITEMAP_FILE)}`);
  console.log(`[sitemap] Generated ${path.relative(process.cwd(), ROBOTS_FILE)}`);
  console.log(
    `[sitemap] Total URLs: ${staticRoutes.length + blogIndex.length + caseStudies.length}`
  );
}

main().catch((error) => {
  console.error('[sitemap] Fatal error:', error);
  process.exit(1);
});

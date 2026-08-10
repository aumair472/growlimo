const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://growlimo.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/thank-you'],
  transform: async (config, urlPath) => {
    const cleanPath = urlPath.replace(/\/$/, '');

    if (cleanPath === '/dubai' || cleanPath === '/australia') {
      return {
        loc: urlPath,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Blog posts: use frontmatter date as lastmod
    const blogMatch = cleanPath.match(/^\/blog\/(.+)$/);
    if (blogMatch && blogMatch[1] !== '') {
      const slug = blogMatch[1];
      const mdxPath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);
      try {
        const fileContent = fs.readFileSync(mdxPath, 'utf8');
        const { data } = matter(fileContent);
        const lastmod = data.dateModified || data.date;
        return {
          loc: urlPath,
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: lastmod ? new Date(lastmod).toISOString() : new Date().toISOString(),
        };
      } catch {
        // MDX file not found — use current date
      }
    }

    return {
      loc: urlPath,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
}

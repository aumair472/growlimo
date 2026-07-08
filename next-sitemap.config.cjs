/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://growlimo.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Custom parameters for Dubai and Australia flagship landing pages
    const cleanPath = path.replace(/\/$/, '');
    if (cleanPath === '/dubai' || cleanPath === '/australia') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Default parameters for all other pages
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
}

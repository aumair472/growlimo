/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.growlimo.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ['/admin*', '/thank-you'],
  changefreq: 'weekly',
  transform: async (config, path) => {
    // Assign priority based on page type
    let priority = 0.7;
    let changefreq = 'weekly';
    if (path === '/') { priority = 1.0; changefreq = 'daily'; }
    else if (!path.startsWith('/blog/') && !path.startsWith('/case-studies/') && path !== '/blog/' && path !== '/case-studies/') {
      priority = 0.8; // service pages
    } else if (path.startsWith('/blog/')) {
      priority = 0.7;
    } else if (path === '/privacy-policy/' || path === '/terms-and-conditions/') {
      priority = 0.3; changefreq = 'monthly';
    }
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/thank-you'],
      },
    ],
  },
}

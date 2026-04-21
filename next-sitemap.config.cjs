/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://growlimo.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin*', '/thank-you'],
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

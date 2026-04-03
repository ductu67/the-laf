/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://thelaf.vn',
  generateRobotsTxt: false, // We already created public/robots.txt
  exclude: ['/server-sitemap.xml'], // if dynamic sitemap is needed later
  generateIndexSitemap: false,
}

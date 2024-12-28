const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
})

module.exports = withNextra({
  siteMap: {
    hostname: 'https://animu-docs.vercel.app',
    gzip: true,
    generateRobotsTxt: true
  }
})
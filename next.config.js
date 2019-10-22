const path = require('path')

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []

    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, 'src'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@controllers': path.resolve(__dirname, 'controllers'),
      '@router': path.resolve(__dirname, 'router')
    }
    return config
  }
}

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: true,
  // 配置跨域
  devServer: {
    open: false,
    host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: true,
    proxy: {
      '/article': {
        target: 'http://192.168.1.19:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/article': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
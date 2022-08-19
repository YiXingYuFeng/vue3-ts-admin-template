module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: 'default',
  productionSourceMap: false,
  devServer: {
    port: '9258',
    client: {
      // 允许浏览器中设置的日志级别
      logging: 'error',
      // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
      overlay: {
        errors: true,
        warnings: false
      },
      // 在浏览器中以百分比显示编译进度。
      progress: true,
      // 告诉 dev-server 它应该尝试重新连接客户端的次数。当为 true 时，它将无限次尝试重新连接
      reconnect: 3
    },
    proxy: {}
  },
  configureWebpack: {},
  chainWebpack: {}
}

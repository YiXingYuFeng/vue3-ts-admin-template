// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: 'default',
  productionSourceMap: false,
  devServer: {
    port: '9258',
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    resolve: {
      // 别名设置
      alias: {
        '@': resolve('src'),
        '@utils': resolve('src/util'),
        '@components': resolve('src/components')
      }
    }
  },
  chainWebpack: config => {
    // 配置vue-loader

    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}

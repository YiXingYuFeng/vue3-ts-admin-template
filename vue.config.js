// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
function resolve (dir) {
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
    // svg
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module
      .rule('svg')
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}

import SvgIcon from './components/Index.vue'
const componentPLugin:any = {
  install: (vue:any, options: any) => {
    const ctx = require.context('./svg', false, /\.svg$/)
    ctx.keys().map(path => {
      const temp = path.match(/\.\/([A-Za-z0-9\-_]+)\.svg$/)
      if (!temp) return
      const name = temp[1]
      require(`@/assets/svg/${name}.svg`)
    })
    vue.component(SvgIcon.name, SvgIcon)
  }
}

export default componentPLugin

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import svgPlugin from './icons/index'
createApp(App)
  .use(store)
  .use(router)
  .use(svgPlugin, { import: [] })
  .mount('#app')

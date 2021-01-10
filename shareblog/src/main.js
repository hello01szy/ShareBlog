import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import 'font-awesome/css/font-awesome.min.css'
import cookie from './lib/cookie'
import ElementUI from 'element-ui'
import instance from '@/http/http.js'
import 'element-ui/lib/theme-chalk/index.css'
require('./mock/mock.js')
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.cookie = cookie
Vue.prototype.$axios = instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/lib/cookie'
import cookie from './lib/cookie'
Vue.config.productionTip = false
Vue.prototype.cookie = cookie
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

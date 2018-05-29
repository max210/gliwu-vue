// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import qs from 'qs'
import VueSocketio from 'vue-socket.io'

axios.defaults.withCredentials = true  // axios请求携带cookie

let globalData = {}
globalData.host = 'http://localhost:3000/api'
Vue.prototype.globalData = globalData
Vue.prototype.qs = qs

Vue.config.productionTip = false

Vue.use(Vueaxios, axios)  // 全局使用axios
Vue.use(VueLazyload, { loading: 'static/img-loading.gif' })
Vue.use(VueSocketio, 'http://localhost:3000')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

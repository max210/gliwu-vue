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

import globalData from '../globalData'

axios.defaults.withCredentials = true  // axios请求携带cookie

Vue.prototype.globalData = globalData
Vue.prototype.qs = qs

Vue.config.productionTip = false

Vue.use(Vueaxios, axios)  // 全局使用axios
Vue.use(VueLazyload, { loading: 'static/img-loading.gif' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

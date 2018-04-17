// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import VueAxios from 'vue-axios'

import globalData from '../globalData'

Vue.prototype.globalData = globalData

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueLazyload, { loading: 'static/img-loading.gif' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

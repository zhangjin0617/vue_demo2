// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
 import Vue from 'vue'
 import App from './App'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store'
import Star from './components/Star/Star'
import ajax from './api'

Vue.prototype.$ajax=ajax
Vue.component('Header',Header)
Vue.component('Star',Star)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,//路由器
  store,//配置vuex
})

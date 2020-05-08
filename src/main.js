import Vue from 'vue'
import App from './App.vue'
import router from './utils/router'
import store from './utils/store'
import global from './utils/global'
import './theme/element'

Vue.config.productionTip = false
Vue.prototype.global = global


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

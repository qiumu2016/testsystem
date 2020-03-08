import Vue from 'vue'
import App from './App.vue'
import router from './utils/router'
import store from './utils/store'
import './theme/element'
import axios from 'axios'

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './theme/element'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$ajax = Axios
Axios.defaults.withCredentials = true;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

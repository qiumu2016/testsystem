import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/device_u',
      name: 'u',
      component: () => import('./views/About.vue')
    },
    {
      path: '/device_uv',
      name: 'uv',
      component: () => import('./views/About.vue')
    }
  ]
})

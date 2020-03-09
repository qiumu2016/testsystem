import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/device_u',
      name: 'u',
      component: () => import('../views/Device_U.vue')
    },
    {
      path: '/device_uv',
      name: 'uv',
      component: () => import('../views/Device_UV.vue')
    }
  ]
})

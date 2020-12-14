import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Login from '@/views/Login/index.vue' ;
import Homes from '@/views/Homes/index.vue' ;

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Homes',
    component:Homes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Earn from '../views/Earn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/earn',
    name: 'earn',
    component: Earn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

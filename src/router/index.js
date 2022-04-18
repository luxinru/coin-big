import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/login.vue'),
    meta: {
      level: 1
    }
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      level: 2
    },
    component: () => import(/* webpackChunkName: "Register" */ '../views/register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

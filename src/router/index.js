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
      level: 1,
      isShowFooter: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      level: 2,
      isShowFooter: false
    },
    component: () => import(/* webpackChunkName: "Register" */ '../views/register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue'),
    meta: {
      level: 1,
      isShowFooter: true
    }
  },
  {
    path: '/kline',
    name: 'Kline',
    component: () => import(/* webpackChunkName: "Kline" */ '../views/kline.vue'),
    meta: {
      level: 1,
      isShowFooter: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

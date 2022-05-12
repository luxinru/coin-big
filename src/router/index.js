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
    path: '/quotes',
    name: 'Quotes',
    component: () => import(/* webpackChunkName: "Quotes" */ '../views/quotes.vue'),
    meta: {
      level: 1,
      isShowFooter: true
    }
  },
  {
    path: '/quotes/details/:id',
    name: 'QuotesDetails',
    component: () => import(/* webpackChunkName: "Quotes" */ '../views/quotes-details.vue'),
    meta: {
      level: 2,
      isShowFooter: false
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "Mine" */ '../views/mine.vue'),
    meta: {
      level: 1,
      isShowFooter: true
    }
  },
  {
    path: '/security-settings',
    name: 'SecuritySettings',
    component: () => import(/* webpackChunkName: "SecuritySettings" */ '../views/security-settings.vue'),
    meta: {
      level: 2,
      isShowFooter: false
    }
  },
  {
    path: '/authentication',
    name: 'Authentication',
    component: () => import(/* webpackChunkName: "Authentication" */ '../views/authentication.vue'),
    meta: {
      level: 3,
      isShowFooter: false
    }
  },
  {
    path: '/mailbox-mgt',
    name: 'MailboxMgt',
    component: () => import(/* webpackChunkName: "MailboxMgt" */ '../views/mailbox-mgt.vue'),
    meta: {
      level: 3,
      isShowFooter: false
    }
  },
  {
    path: '/mail-verification',
    name: 'MailVerification',
    component: () => import(/* webpackChunkName: "MailVerification" */ '../views/mail-verification.vue'),
    meta: {
      level: 3,
      isShowFooter: false
    }
  },
  {
    path: '/contract',
    name: 'Contract',
    component: () => import(/* webpackChunkName: "Contract" */ '../views/contract.vue'),
    meta: {
      level: 1,
      isShowFooter: true
    }
  },
  {
    path: '/currency-trading',
    name: 'CurrencyTrading',
    component: () => import(/* webpackChunkName: "CurrencyTrading" */ '../views/currency-trading.vue'),
    meta: {
      level: 1,
      isShowFooter: true
    }
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component: () => import(/* webpackChunkName: "Recharge" */ '../views/recharge.vue'),
    meta: {
      level: 2,
      isShowFooter: false
    }
  },
  {
    path: '/recharge-details',
    name: 'RechargeDetails',
    component: () => import(/* webpackChunkName: "RechargeDetails" */ '../views/recharge-details.vue'),
    meta: {
      level: 3,
      isShowFooter: false
    }
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import(/* webpackChunkName: "Withdraw" */ '../views/withdraw.vue'),
    meta: {
      level: 2,
      isShowFooter: false
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "Help" */ '../views/help.vue'),
    meta: {
      level: 2,
      isShowFooter: false
    }
  },
  {
    path: '/help-content',
    name: 'HelpContent',
    component: () => import(/* webpackChunkName: "HelpContent" */ '../views/help-content.vue'),
    meta: {
      level: 3,
      isShowFooter: false
    }
  },
  {
    path: '/announcement',
    name: 'Announcement',
    component: () => import(/* webpackChunkName: "Announcement" */ '../views/announcement.vue'),
    meta: {
      level: 2,
      isShowFooter: false
    }
  },
  {
    path: '/announcement-content',
    name: 'AnnouncementContent',
    component: () => import(/* webpackChunkName: "AnnouncementContent" */ '../views/announcement-content.vue'),
    meta: {
      level: 3,
      isShowFooter: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

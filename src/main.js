import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Vant from 'vant'
import 'vant/lib/index.css'
import Btn from './components/btn.vue'

import cn from './assets/lang/cn'
import de from './assets/lang/de'
import en from './assets/lang/en'
import es from './assets/lang/es'
import fr from './assets/lang/fr'
import hi from './assets/lang/hi'
import hk from './assets/lang/hk'
import it from './assets/lang/it'
import jp from './assets/lang/jp'
import ko from './assets/lang/ko'
import ru from './assets/lang/ru'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(Vant)

Vue.component('Btn', Btn)

const lang = {
  cn,
  de,
  en,
  es,
  fr,
  hi,
  hk,
  it,
  jp,
  ko,
  ru
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: window.localStorage.getItem('lang') || 'cn', // 设置地区
  messages: lang // 设置地区信息
})

/**
 * 进入每一个页面回到顶部
 */
router.beforeEach((to, from, next) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0
  next()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
    <section class="footer" v-if="route.meta.isShowFooter">
      <div class="item" @click="onClickItem('Home')">
        <img
          v-if="route.name === 'Home'"
          src="@/assets/images/首页 拷贝.png"
          alt=""
        />
        <img v-else src="@/assets/images/首页 拷贝 2.png" alt="" />
        <span :class="{active: route.name === 'Home'}">{{ $t('header.index') }}</span>
      </div>
      <div class="item" @click="onClickItem('Quotes')">
        <img
          v-if="route.name === 'Quotes'"
          src="@/assets/images/markets 拷贝.png"
          alt=""
        />
        <img v-else src="@/assets/images/markets 拷贝 2.png" alt="" />
        <span :class="{active: route.name === 'Quotes'}">{{ $t('option.kline') }}</span>
      </div>
      <div class="item" @click="onClickItem('Exchange')">
        <img
          v-if="route.name === 'Exchange'"
          src="@/assets/images/Exchange 拷贝 2.png"
          alt=""
        />
        <img v-else src="@/assets/images/Exchange 拷贝 2.png" alt="" />
        <span :class="{active: route.name === 'Exchange'}">{{ $t('uc.finance.trade.exchange') }}</span>
      </div>
      <div class="item" @click="onClickItem('Contract')">
        <img
          v-if="route.name === 'Contract'"
          src="@/assets/images/file-contract 拷贝.png"
          alt=""
        />
        <img v-else src="@/assets/images/file-contract 拷贝 2.png" alt="" />
        <span :class="{active: route.name === 'Contract'}">{{ $t('swap.contract') }}</span>
      </div>
      <div class="item" @click="onClickItem('Mine')">
        <img
          v-if="route.name === 'Mine'"
          src="@/assets/images/my_fill 拷贝.png"
          alt=""
        />
        <img v-else src="@/assets/images/my_fill 拷贝 2.png" alt="" />
        <span :class="{active: route.name === 'Mine'}">{{ $t('uc.member.usercenter') }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      transitionName: 'slide-left'
    }
  },

  computed: {
    route () {
      return this.$route
    }
  },

  watch: {
    // 监听路由切换转场动画
    $route (to, from) {
      const toDepth = to.meta.level
      const fromDepth = from.meta.level
      this.transitionName = toDepth >= fromDepth ? 'slide-left' : 'slide-right'
    }
  },

  methods: {
    onClickItem (name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

.page_root {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-bottom: 62px;
}

.mt16 {
  margin-top: 16px;
}

.btnmargin {
  margin: 36px 0;
}

.slide-left-enter-active {
  animation-name: slide-left-in;
  animation-duration: 0.3s;
}
.slide-left-leave-active {
  animation-name: slide-left-out;
  animation-duration: 0.3s;
}
.slide-right-enter-active {
  animation-name: slide-right-in;
  animation-duration: 0.3s;
}
.slide-right-leave-active {
  animation-name: slide-right-out;
  animation-duration: 0.3s;
}

@keyframes slide-left-in {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-left-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slide-right-in {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slide-right-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 62px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid rgba(178, 178, 178, 0.3);
  background-color: rgba(245, 246, 249, 1);

  .item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 21px;
    }

    span {
      width: 100%;
      text-align: center;
      font-size: 13px;
      font-weight: 400;
      color: #828991;
      margin-top: 2px;
      word-break: break-all;
    }

    .active {
      color: #3453C4;
    }
  }
}
</style>

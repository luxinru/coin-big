<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
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

  watch: {
    // 监听路由切换转场动画
    $route (to, from) {
      const toDepth = to.meta.level
      const fromDepth = from.meta.level
      this.transitionName = toDepth > fromDepth ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style lang="less">
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

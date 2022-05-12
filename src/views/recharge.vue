<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>选择币种</span>
    </section>

    <section class="content">
      <div
        class="item"
        @click="$router.push({ path: '/recharge-details', query: { type: 1 } })"
      >
        <span>BTC</span>
        <img src="@/assets/images/返回 拷贝.png" alt="" />
      </div>

      <div
        class="item"
        @click="$router.push({ path: '/recharge-details', query: { type: 2 } })"
      >
        <span>ETH</span>
        <img src="@/assets/images/返回 拷贝.png" alt="" />
      </div>

      <div
        class="item"
        @click="$router.push({ path: '/recharge-details', query: { type: 3 } })"
      >
        <span>EUSDT</span>
        <img src="@/assets/images/返回 拷贝.png" alt="" />
      </div>

      <div
        class="item"
        @click="$router.push({ path: '/recharge-details', query: { type: 4 } })"
      >
        <span>TUSDT</span>
        <img src="@/assets/images/返回 拷贝.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Recharge',

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  .content {
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    padding: 0 16px;

    .item {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(229, 227, 227, 1);
      font-size: 16px;
      font-weight: 600;
      color: #12161a;

      img {
        height: 7px;
      }
    }
  }
}
</style>

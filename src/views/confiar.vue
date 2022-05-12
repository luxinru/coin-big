<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>委托</span>
    </section>

    <section class="item" v-for="index in 18" :key="index" @click="$router.push('/confiar-detail')">
      <div class="title">
        <span>
          盈亏：
            <span>195</span>
        </span>
        <span>看涨</span>
      </div>

      <div class="content">
        <div class="content_item">
          <span>下单时间</span>
          <span>2022.05.04 11:12:11</span>
        </div>
        <div class="content_item">
          <span>委托合约</span>
          <span>BTC/USDT</span>
        </div>
        <div class="content_item">
          <span>委托价格</span>
          <span>38827.94</span>
        </div>
        <div class="content_item">
          <span>下单数量</span>
          <span>1300 USDT</span>
        </div>
        <div class="content_item">
          <span>包赔</span>
          <span>否</span>
        </div>
        <div class="content_item">
          <span>结算价格</span>
          <span>38827.94</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Confiar',

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  background-color: rgba(246, 247, 251, 1);

  .item {
    width: 344px;
    height: 155px;
    background: #FFFFFF;
    border-radius: 7px;
    padding: 16px 14px;
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      span {
        &:nth-child(1) {
          flex: 1 0;
          font-size: 16px;
          font-weight: 500;
          color: #17191E;

          span {
            color: rgba(0, 178, 117, 1);
          }
        }

        &:nth-child(2) {
          width: 59px;
          height: 21px;
          background: rgba(0, 178, 117, 0.3);
          border-radius: 3px;
          font-size: 13px;
          font-weight: 400;
          color: #00B275;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .content {
      flex: 1 0;
      width: 100%;
      margin-top: 14px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 21px;

      &_item {
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        color: #B1B1B1;
      }
    }
  }
}
</style>

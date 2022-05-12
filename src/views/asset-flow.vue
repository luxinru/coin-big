<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>资产流水</span>
    </section>

    <section class="item" v-for="index in 18" :key="index">
      <img src="@/assets/images/circle-usdt.png" alt="" />
      <div class="info">
        <div class="title">
          <div>
            <span>200USDT</span>
            <span>其他</span>
          </div>
          <span>已完成</span>
        </div>
        <div class="content">
          <div class="content_item">
            <span>
              应付手续费
            </span>
            <span>0</span>
          </div>
          <div class="content_item">
            <span>
              抵扣手续费
            </span>
            <span>0</span>
          </div>
          <div class="content_item">
            <span>
              实际手续费
            </span>
            <span>0</span>
          </div>
        </div>

        <span class="time">
          2022-02-2316:19:53
        </span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AssetFlow',

  data () {
    return {
      active: 0
    }
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  .item {
    width: 100%;
    height: 154px;
    display: flex;
    padding: 0 14px;
    border-bottom: 1px solid rgba(238, 238, 238, 1);

    img {
      height: 36px;
      margin-top: 36px;
      margin-right: 12px;
    }

    .info {
      flex: 1 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 28px 0;

      .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
          flex: 1 0;
          display: flex;
          align-items: center;
          span {
            &:nth-child(1) {
              font-size: 16px;
              font-weight: 600;
              color: #131521;
            }

            &:nth-child(2) {
              width: 48px;
              height: 21px;
              background-color: rgba(254, 120, 0, 0.2);
              border-radius: 3px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 13px;
              font-weight: 400;
              color: #ff6101;
              margin-left: 16px;
            }
          }
        }

        span {
          font-size: 13px;
          font-weight: 400;
          color: #51565a;
        }
      }

      .content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 10px;

        &_item {
          width: 100%;
          display: flex;
          flex-direction: column;

          span {
            font-size: 13px;
            font-weight: 400;
            color: #89929B;

            &:last-child {
              font-size: 13px;
              font-weight: 400;
              color: #5B5F6A;
              margin-top: 9px;
            }
          }
        }
      }

      .time {
        font-size: 13px;
        font-weight: 400;
        color: #89929B;
      }
    }
  }
}
</style>

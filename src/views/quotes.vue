<template>
  <div class="page_root">
    <van-nav-bar
      class="nav_bar"
      :title="$t('option.kline')"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active" color="rgba(58, 110, 218, 1)" class="tabs">
      <van-tab v-for="(item, index) in tabsOptions" :key="index" :title="item">
        <div class="list">
          <div class="item" v-for="j in 15" :key="j" @click="onItemClick">
            <div class="name">
              <p>
                BTC
                <span>/USDT</span>
              </p>
              <p>24HVol 818.20</p>
            </div>

            <div class="value">
              <span>35612.5</span>
              <span>≈280547.58 CNY</span>
            </div>

            <div class="btn">
              +2.23%
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Quotes',

  data () {
    return {
      active: 0,
      tabsOptions: ['USDT', 'BTC', 'ETH', 'Favorites'],
      list: [
        {

        }
      ]
    }
  },

  methods: {
    onClickLeft () {
      this.$router.push({ name: 'Home' })
    },

    onItemClick () {
      this.$router.push({
        path: `/quotes/details/${123123123}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page_root {
  .nav_bar {
    width: 100%;

    /deep/ .van-nav-bar__left {
      i {
        color: #000;
      }
    }
  }

  .tabs {
    width: 100%;
    padding: 0 16px;
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;

    .item {
      width: 100%;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 16px;

      .name {
        display: flex;
        flex-direction: column;

        p {
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          color: #17191E;

          span {
            font-size: 11px;
            font-weight: 500;
            color: #9CA2AC;
            margin-left: 8px;
            zoom: calc(11 / 12);
          }

          &:last-child {
            font-size: 11px;
            font-weight: 400;
            color: #879095;
            zoom: calc(11 / 12);
          }
        }
      }

      .value {
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
          font-size: 16px;
          font-weight: bold;
          color: #272A2F;

          &:last-child {
            font-size: 11px;
            font-weight: 400;
            color: #879095;
          }
        }
      }

      .btn {
        padding: 0 16px;
        width: max-content;
        height: 34px;
        background: #59AA87;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: bold;
        color: #FFFFFF;
      }
    }
  }
}
</style>

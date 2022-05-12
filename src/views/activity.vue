<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>最新活动</span>
    </section>

    <van-tabs v-model="active" class="tabs" color="rgba(58, 110, 218, 1)">
      <van-tab title="全部"></van-tab>
      <van-tab title="即将开始"></van-tab>
      <van-tab title="进行中"></van-tab>
      <van-tab title="派发中"></van-tab>
      <van-tab title="已完成"></van-tab>
    </van-tabs>

    <section class="item" v-for="index in 6" :key="index">
      <div class="img">
        <img src="" alt="" />
        <span>锁仓释放</span>
      </div>

      <div class="info">
        <div class="title">
          <span>锁仓挖矿</span>
          <span>进行中</span>
        </div>

        <van-progress
          :percentage="65"
          class="progress"
          :show-pivot="false"
          stroke-width="5"
          color="rgba(52, 83, 196, 1)"
          track-color="rgba(235, 235, 235, 1)"
        />

        <div class="tips">
          <span> 活动总量：100000.00LTC </span>
          <span> 30% </span>
        </div>

        <div class="time">
          <span>开始时间：2022.01.01 00:00:00</span>
          <span>结束时间：2022.01.01 00:00:00</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Activity',

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
  background-color: rgba(246, 247, 251, 1);
  .tabs {
    width: 100%;

    /deep/ .van-tabs__nav {
      background-color: rgba(246, 247, 251, 1);
    }
  }

  .item {
    width: 344px;
    height: 143px;
    background: #ffffff;
    border-radius: 7px;
    margin-top: 13px;
    display: flex;
    align-items: center;
    padding: 15px;

    .img {
      width: 84px;
      height: 100%;
      margin-right: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        width: 84px;
        height: 84px;
      }

      span {
        padding: 0 13px;
        height: 19px;
        background: #fe9800;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 400;
        color: #ffffff;
      }
    }

    .info {
      flex: 1 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        width: 100%;
        display: flex;
        align-items: flex-start;

        span {
          &:first-child {
            flex: 1 0;
            font-size: 16px;
            font-weight: 500;
            color: #17191e;
          }

          &:last-child {
            width: 59px;
            height: 21px;
            background: rgba(52, 83, 196, 0.3);
            border-radius: 3px;
            font-size: 13px;
            font-weight: 400;
            color: #3453c4;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      .progress {
        width: 100%;
      }

      .tips {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 12px;
          font-weight: 400;
          color: #3453c4;
        }
      }

      .time {
        width: 100%;
        display: flex;
        flex-direction: column;

        span {
          font-size: 12px;
          font-weight: 400;
          color: #b1b1b1;
        }
      }
    }
  }
}
</style>

<template>
  <div class="page_root">
    <van-tabs v-model="active" class="tabs" color="rgba(58, 110, 218, 1)">
      <van-tab :title="$t('header.swap4')"></van-tab>
      <van-tab :title="$t('header.swap1')"></van-tab>
    </van-tabs>
    <section class="title">
      <img src="@/assets/images/更多 拷贝.png" alt="" @click="show = true" />
      <span>ETH/BTC</span>
      <img src="@/assets/images/更多 拷贝.png" alt="" />
    </section>

    <section class="info">
      <div class="left">
        <span>32,591.4100</span>
        <div>
          ≈6532.73 CNY
          <p>+0.22%</p>
        </div>
      </div>
      <div class="right">
        <div>
          <span>24h高</span>
          <span>44856.00</span>
        </div>
        <div>
          <span>24h量</span>
          <span>226.00000000</span>
        </div>
        <div>
          <span>24h低</span>
          <span>44856.00</span>
        </div>
      </div>
    </section>

    <section class="chart"></section>

    <section class="sub_title">
      <span>当前委托</span>
      <span>包赔规则</span>
    </section>

    <section class="btns">
      <div class="img">
        <img src="" alt="" />
        持仓
      </div>

      <span @click="show2 = true">买入</span>

      <span :style="{ 'background-color': 'rgba(208, 81, 72, 1)' }">卖出</span>
    </section>

    <van-popup v-model="show" position="left" class="popup">
      <section class="popup_title">
        <span>秒合约</span>
        <img src="" alt="" @click="show = false" />
      </section>

      <van-tabs
        v-model="popupActive"
        class="popup_tabs"
        color="rgba(58, 110, 218, 1)"
      >
        <van-tab title="USDT"></van-tab>
        <van-tab title="BTC"></van-tab>
        <van-tab title="ETH"></van-tab>
        <van-tab title="收藏"></van-tab>
      </van-tabs>

      <div class="item" v-for="index in 20" :key="index">
        <span>BTC</span>
        <span>35612.5</span>
        <span>+2.23%</span>
      </div>
    </van-popup>

    <van-popup v-model="show2" round position="bottom" class="popup2">
      <section class="popup2_title">
        订单确认
        <img src="@/assets/images/组 4.png" alt="" @click="show2 = false" />
      </section>

      <section class="box">
        <div>
          <span>名称</span>
          <span>BTC/USDT</span>
        </div>
        <div>
          <span>方向</span>
          <span>看涨T</span>
        </div>
        <div>
          <span>现价</span>
          <span>44763.79</span>
        </div>
      </section>

      <span class="popup2_sub_title">交易币种</span>

      <section class="item_box">
        <span :class="{ active: itemType === 1 }" @click="itemType = 1">
          USDT
        </span>
        <span :class="{ active: itemType === 2 }" @click="itemType = 2">
          BTC
        </span>
        <span :class="{ active: itemType === 3 }" @click="itemType = 3">
          ETH
        </span>
        <span :class="{ active: itemType === 4 }" @click="itemType = 4">
          TRX
        </span>
      </section>

      <section class="time_box">
        <div :class="{ active: timeType === 1 }" @click="timeType = 1">
          <span>1分钟</span>
          <span>15.00%</span>
        </div>
        <div :class="{ active: timeType === 2 }" @click="timeType = 2">
          <span>2分钟</span>
          <span>15.00%</span>
        </div>
        <div :class="{ active: timeType === 3 }" @click="timeType = 3">
          <span>60分钟</span>
          <span>15.00%</span>
        </div>
      </section>

      <span class="popup2_sub_title">购买数量</span>

      <input type="number">

      <span class="tip">
        可用数量: 101590.75
      </span>

      <section class="btn">
        确认下单
      </section>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'Contract',

  data () {
    return {
      active: 0,
      show: false,
      show2: false,
      popupActive: 0,
      itemType: 1,
      timeType: 1
    }
  }
}
</script>

<style lang="less" scoped>
.page_root {
  padding-bottom: 82px;
  .tabs {
    width: 100%;
    padding: 0 20%;
  }

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 16px;
    padding: 0 16px;

    img {
      width: 16px;
      height: 16px;
    }

    span {
      flex: 1 0;
      font-size: 18px;
      font-weight: 500;
      color: #000000;
      margin: 0 16px;
    }
  }

  .info {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 27px;
    padding: 0 16px;

    .left {
      flex: 1 0;
      display: flex;
      flex-direction: column;

      span {
        width: 100%;
        font-size: 25px;
        font-weight: 600;
        color: #06ab8e;
      }

      div {
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: #8f99bc;
        display: flex;
        align-items: center;
        margin-top: 26px;

        p {
          font-size: 14px;
          font-weight: 600;
          color: #06ab8e;
          margin-left: 9px;
        }
      }
    }

    .right {
      flex: 1 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 8px;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;

        span {
          width: 100%;

          &:first-child {
            font-size: 11px;
            font-weight: 400;
            color: #8f99bc;
          }

          &:last-child {
            font-size: 11px;
            font-weight: 600;
            color: #191820;
            margin-top: 5px;
          }
        }
      }
    }
  }

  .chart {
    width: 100%;
    height: 400px;
  }

  .sub_title {
    width: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;

    span {
      &:first-child {
        font-size: 17px;
        font-weight: 500;
        color: #010206;
      }

      &:last-child {
        font-size: 12px;
        font-weight: 400;
        color: #3453c4;
      }
    }
  }

  .btns {
    width: 100%;
    height: 45px;
    padding: 0 13px;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .img {
      display: flex;
      flex-direction: column;

      img {
        height: 15px;
        margin-bottom: 8px;
      }

      font-size: 10px;
      font-weight: 400;
      color: #3c475b;
    }

    span {
      width: 140px;
      height: 100%;
      background: #4aac73;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 500;
      color: #ffffff;
    }
  }

  .popup {
    width: 87%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .popup_title {
      width: 100%;
      margin-top: 57px;
      padding: 0 12px;
      display: flex;
      align-items: center;

      span {
        flex: 1 0;
        font-size: 19px;
        font-weight: 500;
        color: #000000;
      }

      img {
        height: 19px;
        margin-left: 16px;
      }
    }

    .popup_tabs {
      width: 100%;
      margin-top: 20px;
      padding: 0 12px;
    }

    .item {
      width: 100%;
      height: 34px;
      display: flex;
      align-items: center;
      margin-top: 16px;
      padding: 0 18px;

      &:last-child {
        margin-bottom: 24px;
      }

      span {
        &:nth-child(1) {
          font-size: 16px;
          font-weight: 600;
          color: #17191e;
        }

        &:nth-child(2) {
          flex: 1 0;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          color: #272a2f;
        }

        &:nth-child(3) {
          font-size: 13px;
          font-weight: bold;
          color: #ffffff;
          width: 78px;
          height: 100%;
          background: #59aa87;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .popup2 {
    width: 100%;
    height: 553px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    .popup2_title {
      position: relative;
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      color: #000000;

      img {
        position: absolute;
        right: 0;
        height: 19px;
      }
    }

    .box {
      width: 100%;
      height: 108px;
      background: #ecf2fe;
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      margin-top: 24px;

      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 13px;
          font-weight: 400;
          color: #3b6fdc;
        }
      }
    }

    .popup2_sub_title {
      width: 100%;
      font-size: 15px;
      font-weight: 400;
      color: #5d646e;
      margin-top: 20px;
    }

    .item_box {
      width: 100%;
      height: 31px;
      display: flex;
      align-items: center;
      margin-top: 20px;

      span {
        flex: 1 0;
        height: 100%;
        margin-left: 9px;
        background-color: #f6f7fb;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 400;
        color: #5a6069;

        &:first-child {
          margin-left: 0;
        }
      }

      .active {
        background-color: rgba(59, 111, 220, 1);
        color: #fff;
      }
    }

    .time_box {
      width: 100%;
      height: 52px;
      display: flex;
      align-items: center;
      margin-top: 20px;

      div {
        flex: 1 0;
        height: 100%;
        margin-left: 14px;
        background-color: #f6f7fb;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        font-size: 13px;
        font-weight: 400;
        color: #5a6069;
        overflow: hidden;

        &:first-child {
          margin-left: 0;
        }

        span {
          flex: 1 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .active {
        span {
          &:first-child {
            background-color: rgba(59, 111, 220, 1);
            color: #fff;
          }
        }
      }
    }

    input {
      width: 100%;
      height: 49px;
      outline: none;
      border-radius: 7px;
      border: 1px solid rgba(90, 96, 105, 0.2);
      margin-top: 20px;
      padding: 0 16px;
    }

    .tip {
      width: 100%;
      margin-top: 13px;
      font-size: 13px;
      font-weight: 400;
      color: #151516;
    }

    .btn {
      width: 100%;
      height: 48px;
      background: #3B6FDC;
      border-radius: 7px;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
}
</style>

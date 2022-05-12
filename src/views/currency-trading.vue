<template>
  <div class="page_root">
    <section class="header">币币</section>

    <section class="title">
      <img src="@/assets/images/更多 拷贝.png" />
      <span> NEO/USDT </span>
      <img src="@/assets/images/收藏 拷贝.png" />
      <img src="@/assets/images/更多 拷贝.png" />
    </section>

    <section class="content">
      <div class="left">
        <div class="tip">
          <span>价格(USDT)</span>
          <span>数量</span>
        </div>
        <div class="left_content1">
          <div class="item" v-for="index in 6" :key="index">
            <span>42446</span>
            <span>0.3144</span>
          </div>
        </div>

        <div class="info">
          <div class="info_title">
            42427.9
            <van-icon name="play" color="rgba(208, 81, 72, 1)" size="8" />
          </div>
          <span class="info_tip">
            <span> ≈24.59USD </span>
            <img src="" alt="" />
          </span>
        </div>

        <div class="left_content1 left_content2">
          <div class="item" v-for="index in 6" :key="index">
            <span>42446</span>
            <span>0.3144</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="btns">
          <span :class="{ in: type === 1 }" @click="type = 1">买入</span>
          <span :class="{ out: type === 2 }" @click="type = 2">卖出</span>
        </div>

        <div class="select" @click="showPicker = true">
          限价
          <van-icon name="arrow-down" color="rgba(135, 147, 161, 1)" />
        </div>

        <div class="number">
          <van-icon
            name="minus"
            color="rgba(135, 147, 161, 1)"
            @click="onChangeNum(1)"
          />
          <div class="number_input">
            <input v-model="num" type="number" />
          </div>
          <van-icon
            name="plus"
            color="rgba(135, 147, 161, 1)"
            @click="onChangeNum(2)"
          />
        </div>

        <span class="tip"> ≈24.59USD </span>

        <div class="box">数量(NEO)</div>

        <span class="tip"> 可用 6986187.900000 USDT </span>

        <van-steps
          :active="active"
          active-color="rgba(89, 170, 135, 1)"
          @click-step="(index) => (active = index)"
        >
          <van-step></van-step>
          <van-step></van-step>
          <van-step></van-step>
          <van-step></van-step>
        </van-steps>

        <span class="tips">
          <span>0</span>
          <span>284106.868645 NEO</span>
        </span>

        <div class="box mt10">金额(NEO)</div>

        <div
          class="btn"
          :style="{
            'background-color': type === 2 ? 'rgba(208, 81, 72, 1)' : '',
          }"
        >
          买入
        </div>
      </div>
    </section>

    <section class="footer">
      <div class="footer_top">
        <van-tabs v-model="entrustActive" color="rgba(56, 114, 215, 1)">
          <van-tab title="当前委托"></van-tab>
          <van-tab title="历史委托"></van-tab>
        </van-tabs>
        <span class="more" @click="$router.push('/confiar')">更多>></span>
      </div>

      <div class="footer_content">
        <van-empty description="暂无数据"> </van-empty>
      </div>
    </section>

    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'CurrencyTrading',

  data () {
    return {
      type: 1,
      showPicker: false,
      columns: [
        {
          text: '限价',
          value: 1
        }
      ],
      num: 0,
      active: 2,
      entrustActive: 0
    }
  },

  methods: {
    onChangeNum (type) {
      if (type === 1) {
        if (this.num === 0) return
        this.num -= 100
        if (this.num < 0) {
          this.num = 0
        }
      } else {
        this.num += 100
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page_root {
  padding-bottom: 82px;

  .header {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    color: #000000;
  }

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;

    img {
      height: 16px;
      margin-left: 16px;

      &:nth-child(1) {
        margin-left: 0;
      }
    }

    span {
      flex: 1 0;
      margin-left: 16px;
      font-size: 18px;
      font-weight: 500;
      color: #000000;
    }
  }

  .content {
    width: 100%;
    display: flex;
    margin-top: 10px;
    border-bottom: 9px solid rgba(245, 246, 249, 1);
    .left {
      width: 150px;
      display: flex;
      flex-direction: column;
      padding: 12px 6px;

      .tip {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        font-weight: 400;
        color: #839099;
      }

      .left_content1 {
        width: 100%;
        display: flex;
        flex-direction: column;

        .item {
          width: 100%;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 5px;
          padding: 0 2px;
          span {
            font-size: 13px;
            font-weight: 400;
            color: #839099;

            &:first-child {
              color: rgba(208, 81, 72, 1);
            }
          }

          &:nth-child(2n) {
            background-color: rgba(208, 81, 72, 0.05);
          }
        }
      }

      .left_content2 {
        .item {
          span {
            &:first-child {
              color: rgba(89, 170, 135, 1);
            }
          }

          &:nth-child(2n) {
            background-color: rgba(89, 170, 135, 0.05);
          }
        }
      }

      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 16px 0 0 0;
        .info_title {
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: 500;
          color: rgba(208, 81, 72, 1);

          i {
            margin-left: 4px;
            transform: rotate(90deg);
          }
        }

        .info_tip {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 400;
          color: #839099;
          margin-top: 6px;

          span {
            font-size: 13px;
            flex: 1 0;
          }

          img {
            height: 10px;
          }
        }
      }
    }

    .right {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      padding: 12px 6px;

      .btns {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 5px;

        span {
          width: 100%;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(246, 247, 251, 1);
          color: rgba(104, 112, 133, 1);
          border-radius: 3px;
          font-size: 14px;
          font-weight: 500;
        }

        .in {
          color: #ffffff;
          background-color: #59aa87;
        }

        .out {
          color: #ffffff;
          background-color: rgba(208, 81, 72, 1);
        }
      }

      .select {
        position: relative;
        width: 100%;
        height: 32px;
        border: 1px solid #dedde5;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        color: #000000;
        margin-top: 10px;

        i {
          position: absolute;
          right: 11px;
        }
      }

      .number {
        position: relative;
        width: 100%;
        height: 32px;
        border: 1px solid #dedde5;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 11px;
        font-size: 14px;
        font-weight: 500;
        color: #000000;
        margin-top: 10px;

        .number_input {
          flex: 1 0;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 16px;

          input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            text-align: center;
          }
        }
      }

      .tip {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 13px;
        font-weight: 400;
        color: #839099;
        margin: 10px 0;
      }

      .tips {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        font-weight: 400;
        color: #839099;
        margin: 10px 0;
      }

      .box {
        width: 100%;
        height: 45px;
        border: 1px solid #dedde5;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 500;
        color: #687085;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .mt10 {
        margin-top: 10px;
      }

      /deep/ .van-steps--horizontal {
        padding: 0;
        margin: -16px 0 0 0;
        background-color: transparent;

        .van-steps__items {
          margin-bottom: 10px;
        }
      }

      .btn {
        width: 100%;
        height: 44px;
        background: #59aa87;
        border-radius: 4px;
        font-size: 15px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;

    .footer_top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;

      .more {
        font-size: 13px;
        font-weight: 400;
        color: #a3a2a8;
        margin-left: 16px;
      }
    }

    .footer_content {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 16px;

      /deep/ .van-empty__image {
        display: none;
      }
    }
  }
}
</style>

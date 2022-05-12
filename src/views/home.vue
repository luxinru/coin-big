<template>
  <div class="page_root">
    <section class="header">
      <div class="logos">
        <img src="@/assets/images/组 145 拷贝.png" />
        <img
          src="@/assets/images/登录-选中.png"
          @click="$router.push('/mine')"
        />
      </div>

      <div class="info">
        <div class="balance">
          <span>{{ $t('uc.finance.money.totalassets') }}(UDST)</span>
          <span>$6986188.000000</span>
        </div>
        <div class="btns">
          <span @click="$router.push('/recharge')">
            {{ $t('uc.finance.record.charge') }}
          </span>
          <span @click="$router.push('/withdraw')">
            {{ $t('uc.finance.record.pickup') }}
          </span>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="funs">
        <div class="item" @click="$router.push('/help')">
          <img src="@/assets/images/组 29.png" />
          <span>{{ $t('footer.bzzx') }}</span>
        </div>
        <div class="item" @click="$router.push('/announcement')">
          <img src="@/assets/images/组 29 拷贝.png" />
          <span>{{ $t('cms.noticecenter') }}</span>
        </div>
        <div class="item">
          <img src="@/assets/images/组 29 拷贝 3.png" />
          <span>{{ $t('header.activity') }}</span>
        </div>
        <div class="item">
          <img src="@/assets/images/组 29 拷贝 2.png" />
          <span>{{ $t('cms.onlineservice') }}</span>
        </div>
      </div>
      <van-swipe
        class="swiper"
        :autoplay="3000"
        indicator-color="rgba(52, 83, 196, 1)"
      >
        <van-swipe-item>
          <div class="swiper_item">
            <div>
              <span>BTC/USDT</span>
              <span>35570.42</span>
              <span>+3.97%</span>
            </div>
            <div>
              <span>BTC/USDT</span>
              <span>35570.42</span>
              <span>+3.97%</span>
            </div>
            <div>
              <span>BTC/USDT</span>
              <span>35570.42</span>
              <span>+3.97%</span>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="swiper_item">
            <div>
              <span>BTC/USDT</span>
              <span>35570.42</span>
              <span>+3.97%</span>
            </div>
            <div>
              <span>BTC/USDT</span>
              <span>35570.42</span>
              <span>+3.97%</span>
            </div>
            <div>
              <span>BTC/USDT</span>
              <span>35570.42</span>
              <span>+3.97%</span>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>

      <div class="share">
        <div class="title_bar">
          <div class="title">
            <img src="@/assets/images/消息 拷贝.png" />
            <span>Welcome to CoinBig</span>
          </div>
          <img class="more" src="@/assets/images/更多 拷贝.png" />
        </div>

        <van-swipe
          class="carousel"
          :autoplay="3000"
          indicator-color="rgba(52, 83, 196, 1)"
        >
          <van-swipe-item>
            <img src="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="gainers_list">
        <div class="title">涨幅榜</div>
        <div class="item" v-for="index in 10" :key="index">
          <img src="" alt="" />
          <span class="name">
            BTC
            <p>/USDT</p>
          </span>
          <span class="value"> 35612.5 </span>
          <span class="btn"> +2.23% </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
.page_root {
  .header {
    width: 100%;
    height: 145px;
    background: #3453c4;
    padding: 0 18px;

    .logos {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        height: 16px;

        &:last-child {
          height: 32px;
        }
      }
    }

    .info {
      width: 100%;
      display: flex;
      align-items: flex-end;
      margin-top: 24px;

      .balance {
        flex: 1 0;
        display: flex;
        flex-direction: column;

        span {
          font-size: 12px;
          font-weight: 400;
          color: #a7b7e6;
          word-break: break-all;

          &:last-child {
            font-size: 17px;
            font-weight: 600;
            color: #ffffff;
            margin-top: 10px;
          }
        }
      }

      .btns {
        display: flex;

        span {
          width: 71px;
          height: 30px;
          background: #ffffff;
          border-radius: 3px;
          font-size: 13px;
          font-weight: 500;
          color: #3453c4;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          &:last-child {
            margin-left: 9px;
          }
        }
      }
    }
  }

  .content {
    width: 100%;
    background-color: #ffffff;
    border-radius: 13px 13px 0px 0px;
    margin-top: -13px;
    display: flex;
    flex-direction: column;

    .funs {
      width: 100%;
      height: 125px;
      padding: 0 18px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-bottom: 9px solid rgba(245, 246, 249, 1);

      .item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          height: 39px;
        }

        span {
          font-size: 13px;
          font-weight: 400;
          color: #11171e;
          margin-top: 11px;
        }
      }
    }

    .swiper {
      width: 100%;
      height: 117px;
      border-bottom: 9px solid rgba(245, 246, 249, 1);

      .swiper_item {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        div {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          span {
            &:nth-child(1) {
              font-size: 14px;
              font-weight: bold;
              color: #1e253c;
            }

            &:nth-child(2) {
              font-size: 19px;
              font-weight: bold;
              color: #ff3236;
              margin-top: 8px;
            }

            &:nth-child(3) {
              font-size: 10px;
              font-weight: 400;
              color: #666666;
              margin-top: 6px;
              zoom: calc(10 / 12);
            }
          }
        }
      }
    }

    .share {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 16px 13px;

      .title_bar {
        width: 100%;
        height: 13px;
        display: flex;
        align-items: center;

        .title {
          flex: 1 0;
          display: flex;
          align-items: center;

          img {
            height: 13px;
            margin-right: 11px;
          }

          span {
            font-size: 13px;
            font-weight: 400;
            color: #171a1f;
          }
        }

        .more {
          height: 12px;
        }
      }

      .carousel {
        width: 100%;
        height: 170px;
        margin-top: 16px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .gainers_list {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;

      .title {
        width: 100%;
        height: 58px;
        display: flex;
        align-items: center;
        font-size: 17px;
        font-weight: 500;
        color: #010206;
        border-bottom: 1px solid rgba(220, 220, 220, 0.4);
        padding: 0 13px;
      }

      .item {
        width: 100%;
        height: 34px;
        display: flex;
        align-items: center;
        padding: 0 13px;
        margin-top: 16px;

        img {
          height: 22px;
          margin-right: 15px;
        }

        .name {
          font-size: 16px;
          font-weight: 500;
          color: #17191e;
          display: flex;
          align-items: flex-end;

          p {
            font-size: 11px;
            font-weight: 500;
            color: #9ca2ac;
            margin-left: 6px;
          }
        }

        .value {
          flex: 1 0;
          font-size: 16px;
          font-weight: bold;
          color: #272a2f;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .btn {
          width: 78px;
          min-height: 34px;
          background: #59aa87;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: bold;
          color: #ffffff;
          padding: 4px;
        }
      }
    }
  }
}
</style>

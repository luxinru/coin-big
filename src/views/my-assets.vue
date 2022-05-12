<template>
  <div class="page_root">
    <section class="bac"></section>
    <section class="topbar">
      <van-icon
        name="arrow-left"
        class="icon"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>资产</span>
    </section>

    <van-tabs
      v-model="active"
      class="tabs"
      color="rgba(255, 255, 255, 1)"
      title-active-color="rgba(255, 255, 255, 1)"
      title-inactive-color="rgba(255, 255, 255, 0.5)"
    >
      <van-tab title="币币账户"></van-tab>
      <van-tab title="永续账户"></van-tab>
      <van-tab title="秒合约"></van-tab>
    </van-tabs>

    <div class="assets">
      <div class="title">
        <span>总资产 (USDT)</span>
        <img src="@/assets/images/眼睛 拷贝.png" alt="" />
      </div>

      <span class="value"> 157676876.000000 </span>

      <span class="label"> ≈44851328.00CNY </span>
    </div>

    <section class="search_bar">
      <div class="item">
        <van-icon name="search" size="22" />
        <span>搜索资产</span>
      </div>
      <div class="item">
        <van-checkbox v-model="checked" shape="square"></van-checkbox>
        <span> 隐藏为0的币种 </span>
      </div>
    </section>

    <section class="content">
      <div class="item" v-for="index in 8" :key="index">
        <div class="title">
          <img src="@/assets/images/circle-usdt.png" alt="" />
          {{ active === 1 ? 'BTC/USDT Swap Account' : 'USDT' }}
        </div>

        <div class="info">
          <template v-if="active === 1">
            <div class="info_item">
              <span>账户权益</span>
              <span>0</span>
            </div>
            <div class="info_item">
              <span>可用保证金</span>
              <span>0</span>
            </div>
            <div class="info_item">
              <span>已用保证金</span>
              <span>0</span>
            </div>
            <div class="info_item">
              <span>冻结</span>
              <span>0</span>
            </div>
          </template>
          <template v-else>
            <div class="info_item">
              <span>可用</span>
              <span>0</span>
            </div>
            <div class="info_item">
              <span>冻结</span>
              <span>0</span>
            </div>
            <div class="info_item">
              <span>待释放</span>
              <span>0</span>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section class="btns">
      <div @click="$router.push('/recharge')">
        <img src="@/assets/images/充币.png" alt="" />
        <span>充币</span>
      </div>
      <div @click="$router.push('/withdraw')">
        <img src="@/assets/images/充币 拷贝.png" alt="" />
        <span>提币</span>
      </div>
      <div>
        <img src="@/assets/images/划转.png" alt="" />
        <span>划转</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MyAssets',

  data () {
    return {
      active: 0,
      checked: false
    }
  }
}
</script>

<style lang="less" scoped>
.page_root {
  background: linear-gradient(0deg, #ffffff 0%, #f6f7fb 100%);
  .topbar {
    background-color: rgba(51, 83, 196, 1);
    span {
      color: rgba(255, 255, 255, 1);
    }
  }

  .bac {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background-color: rgba(51, 83, 196, 1);
  }

  .tabs {
    width: 100%;

    /deep/ .van-tabs__nav {
      background-color: rgba(51, 83, 196, 1);
    }
  }

  .assets {
    position: relative;
    width: 343px;
    height: 117px;
    background-color: #fff;
    border-radius: 13px;
    margin-top: 11px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 400;
      color: #66716b;

      img {
        height: 10px;
        margin-left: 14px;
      }
    }

    .value {
      width: 100%;
      font-size: 27px;
      font-weight: bold;
      color: #10131a;
      margin-top: 4px;
    }

    .label {
      font-size: 15px;
      font-weight: 400;
      color: #636b77;
    }
  }

  .search_bar {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding: 0 36px;

    .item {
      flex: 1 0;
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 400;
      color: #77787b;

      span {
        margin-left: 10px;
      }
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    padding: 0 18px;

    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 24px;

      .title {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 17px;
        font-weight: 600;
        color: #0d1114;

        img {
          height: 30px;
          margin-right: 12px;
        }
      }

      .info {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 42px;
        margin-top: 10px;

        .info_item {
          flex: 1 0;
          display: flex;
          flex-direction: column;

          span {
            font-size: 13px;
            font-weight: 400;
            color: #77787b;

            &:last-child {
              font-size: 13px;
              font-weight: 400;
              color: #0d1114;
              margin-top: 15px;
            }
          }
        }
      }
    }
  }

  .btns {
    position: fixed;
    left: 16px;
    bottom: 40px;
    width: 343px;
    height: 44px;
    background: #f6f7fb;
    border-radius: 22px;
    display: flex;
    align-items: center;
    padding: 0 36px;

    div {
      flex: 1 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid rgba(227, 228, 232, 1);

      &:last-child {
        border-right: none;
      }

      img {
        height: 18px;
        margin-right: 10px;
      }

      span {
        font-size: 13px;
        font-weight: 400;
        color: #3666ec;
      }
    }
  }
}
</style>

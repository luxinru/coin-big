<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>提币</span>
    </section>

    <section class="header">
      <img src="@/assets/images/BTC.png" alt="" />
      <div class="header_info">
        <span>可用BTC</span>
        <span>157676876.000000</span>
      </div>
    </section>

    <section class="item">
      <div class="input_box">
        <input type="text" placeholder="请输入货选择提币地址">
      </div>
    </section>

    <section class="item">
      <div class="input_box">
        <input type="text" placeholder="备注">
      </div>
    </section>

    <section class="item">
      <div class="input_box">
        <input type="number" placeholder="请输入提币数量（< = 0）">
      </div>
      <span style="color: rgba(59, 111, 220, 1);">全部</span>
    </section>

    <section class="item">
      <div class="input_box">
        <input type="number" placeholder="请输入 0.00008000-0.005999手续费">
      </div>
    </section>

    <section class="item">
      <div class="input_box">
        <input type="password" placeholder="请输入资金密码">
      </div>
    </section>

    <span class="tip">提币数量</span>

    <section class="item">
      <div class="input_box">
        <input type="text" placeholder="自动计算">
      </div>
      <span>BTC</span>
    </section>

    <section class="btn">
      提币
    </section>
  </div>
</template>

<script>
export default {
  name: 'Withdraw',

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {

  .header {
    margin-top: 16px;
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    img {
      height: 67px;
      margin-right: 15px;
    }

    .header_info {
      flex: 1 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px 0;

      span {
        &:first-child {
          font-size: 16px;
          font-weight: 400;
          color: #8C8F96;
        }

        &:last-child {
          font-size: 27px;
          font-weight: bold;
          color: #10131A;
        }
      }
    }
  }

  .item {
    width: 335px;
    height: 49px;
    border: 1px solid #DBE0E4;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin-top: 25px;

    .input_box {
      flex: 1 0;
      height: 100%;

      input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background-color: transparent;
      }
    }

    span {
      font-size: 16px;
      font-weight: 500;
      color: #000000;
    }
  }

  .tip {
    width: 100%;
    padding: 0 20px;
    margin-top: 25px;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
  }

  .btn {
    width: 335px;
    height: 48px;
    background: #3B6FDC;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

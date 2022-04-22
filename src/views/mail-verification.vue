<template>
  <div class="page_root">
    <van-nav-bar
      class="nav_bar"
      title="邮箱验证"
      left-arrow
      @click-left="onClickLeft"
    />

    <section class="list">
      <div class="item">
        <input type="text" placeholder="请输入账号">
      </div>

      <div class="item">
        <input type="password" placeholder="请输入密码">
        <img src="src\assets\images\隐藏密码 拷贝.png" alt="">
      </div>

      <div class="item">
        <input type="password" placeholder="请再次输入">
        <img src="src\assets\images\隐藏密码 拷贝.png" alt="">
      </div>

      <div class="item">
        <input type="password" placeholder="验证码">
        <span>发送验证码</span>
      </div>
    </section>

    <Btn class="btnmargin" title="保存"></Btn>
  </div>
</template>

<script>
export default {
  name: 'MailVerification',

  data () {
    return {}
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
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

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 18px;

    .item {
      width: 100%;
      height: 49px;
      border: 1px solid #DBE0E4;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      margin-top: 40px;

      input {
        flex: 1 0;
        height: 100%;
        font-size: 16px;
        border: none;
        outline: none;
      }

      img {
        height: 14px;
        margin-left: 16px;
      }

      span {
        font-size: 16px;
        font-weight: 400;
        color: #3B6FDC;
        margin-left: 16px;
      }
    }
  }

  .btnmargin {
    width: calc(100% - 40px);
    margin: 34px 20px;
  }
}
</style>

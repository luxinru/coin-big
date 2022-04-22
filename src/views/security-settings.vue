<template>
  <div class="page_root">
    <van-nav-bar
      class="nav_bar"
      title="安全设置"
      left-arrow
      @click-left="onClickLeft"
    />

    <section class="avatar">
      <img class="info" src="" />
      <span>修改</span>
      <img class="more" src="@/assets/images/邀请.png" />
    </section>

    <section class="infos">
      <div class="item" @click="$router.push({ path: '/authentication' })">
        <span class="name">身份认证</span>
        <span class="value">已认证</span>
        <img src="@/assets/images/邀请.png" />
      </div>
      <div class="item" @click="$router.push({ path: '/mail-verification' })">
        <span class="name">绑定邮箱</span>
        <span class="value">已绑定</span>
        <img src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <span class="name">登录密码</span>
        <span class="value">已设置</span>
        <img src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <span class="name">资金密码</span>
        <span class="value">已设置</span>
        <img src="@/assets/images/邀请.png" />
      </div>
    </section>

    <section class="tip">
      为保障您的账户安全,请完成实名认证后方可交易操作!
    </section>
  </div>
</template>

<script>
export default {
  name: 'SecuritySettings',

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

  .avatar {
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    margin: 11px 0 21px;

    .info {
      width: 54px;
      height: 54px;
      background-color: rgba(59, 111, 220, 1);
      border-radius: 50%;
      overflow: hidden;
    }

    span {
      flex: 1 0;
      font-size: 15px;
      font-weight: 400;
      color: #3b6fdc;
      margin: 0 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: right;
    }
    .more {
      height: 14px;
    }
  }

  .infos {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 10px solid rgba(246, 247, 252, 1);

    .item {
      width: 100%;
      height: 59px;
      display: flex;
      align-items: center;
      border-top: 1px solid rgba(238, 238, 238, 1);
      padding: 0 19px;
      .name {
        font-size: 16px;
        font-weight: 400;
        color: #131521;
      }

      .value {
        flex: 1 0;
        font-size: 16px;
        font-weight: 400;
        color: #3b6fdc;
        text-align: right;
      }

      img {
        height: 14px;
        margin-left: 23px;
      }
    }
  }

  .tip {
    width: 100%;
    height: 13px;
    font-size: 13px;
    font-weight: 400;
    color: #ff2e0c;
    margin-top: 19px;
    padding: 0 19px;
    word-break: break-all;
  }
}
</style>

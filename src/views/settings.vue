<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>设置中心</span>
    </section>

    <section class="infos">
      <div class="item" @click="$router.push('/language')">
        <span class="name">语言设置</span>
        <img src="@/assets/images/邀请.png" />
      </div>
      <div class="item" @click="$router.push('/feedback')">
        <span class="name">反馈意见</span>
        <img src="@/assets/images/邀请.png" />
      </div>
      <div class="item" @click="$router.push('/about')">
        <span class="name">关于我们</span>
        <img src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <span class="name">公告中心</span>
        <img src="@/assets/images/邀请.png" />
      </div>
    </section>
    <section class="infos" style="border-bottom: none;">
      <div class="item">
        <span class="name">版本更新</span>
        <span class="value">
          1.7
        </span>
        <img src="@/assets/images/邀请.png" />
      </div>
    </section>

    <div class="btn">
      退出登录
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',

  data () {
    return {}
  },

  methods: {
  }
}
</script>

<style lang="less" scoped>
.page_root {

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
        flex: 1 0;
        font-size: 16px;
        font-weight: 400;
        color: #131521;
      }

      .value {
        font-size: 16px;
        font-weight: 400;
        color: #3b6fdc;
      }

      img {
        height: 14px;
        margin-left: 23px;
      }
    }
  }

  .btn {
    width: 337px;
    height: 48px;
    background: #3B6FDC;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

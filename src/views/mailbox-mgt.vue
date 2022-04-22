<template>
  <div class="page_root">
    <van-nav-bar
      class="nav_bar"
      title="解绑邮箱"
      left-arrow
      @click-left="onClickLeft"
    />

    <section class="infos">
      <div class="item">
        <span class="name">邮箱</span>
        <span class="value">vx3201231@outlook.com</span>
      </div>
    </section>

    <Btn class="btnmargin" title="解绑"></Btn>
  </div>
</template>

<script>
export default {
  name: 'MailboxMgt',

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

  .infos {
    width: 100%;
    display: flex;
    flex-direction: column;

    .item {
      width: 100%;
      height: 59px;
      display: flex;
      align-items: center;
      padding: 0 19px;
      border-bottom: 1px solid rgba(238, 238, 238, 1);
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
    }
  }

  .btnmargin {
    width: calc(100% - 40px);
    margin: 34px 20px;
    background-color: #ee0a24;
  }
}
</style>

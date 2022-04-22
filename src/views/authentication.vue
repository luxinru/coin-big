<template>
  <div class="page_root">
    <van-nav-bar
      class="nav_bar"
      title="身份认证"
      left-arrow
      @click-left="onClickLeft"
    />

    <section class="infos">
      <div class="item">
        <span class="name">姓名</span>
        <span class="value">***8</span>
      </div>
      <div class="item">
        <span class="name">身份证号</span>
        <span class="value">123*******123</span>
      </div>
    </section>

    <section class="tip">
      恭喜你,审核通过,可以安心交易
    </section>
  </div>
</template>

<script>
export default {
  name: 'Authentication',

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
      border-bottom: 1px solid rgba(238, 238, 238, 1);
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
    }
  }

  .tip {
    width: 100%;
    height: 13px;
    font-size: 13px;
    font-weight: 400;
    color: #FF2E0C;
    margin-top: 19px;
    padding: 0 19px;
    word-break: break-all;
  }
}
</style>

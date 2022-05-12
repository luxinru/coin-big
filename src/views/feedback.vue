<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>反馈意见</span>
    </section>

    <div class="title">
      <img src="@/assets/images/message 拷贝.png" alt="" />
      <span>您的意见对我们来说特别重要!</span>
    </div>

    <textarea
      type="textarea"
      placeholder="留下您的宝贵意见,帮助我们做的更好!"
    />

    <div class="btn">提交</div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  .title {
    width: 100%;
    margin-top: 16px;
    display: flex;
    align-items: center;
    padding: 0 14px;

    img {
      height: 16px;
      margin-right: 16px;
    }

    span {
      font-size: 15px;
      font-weight: 400;
      color: #000000;
    }
  }

  textarea {
    width: 338px;
    height: 235px;
    border: 1px solid #dbe0e4;
    border-radius: 4px;
    margin-top: 16px;
    padding: 16px;
    resize: none;
  }

  .btn {
    width: 337px;
    height: 48px;
    background: #3b6fdc;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

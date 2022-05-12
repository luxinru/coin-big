<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>更改登录密码</span>
    </section>

    <input type="password" placeholder="请输入旧登录密码" />

    <input type="password" placeholder="请输入新登录密码" />

    <input type="password" placeholder="请再次输入密码" />

    <div class="btn">保存</div>
  </div>
</template>

<script>
export default {
  name: 'SetFundpwd',

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  input {
    width: 338px;
    height: 49px;
    border: 1px solid #dbe0e4;
    border-radius: 4px;
    outline: none;
    padding: 0 21px;
    margin-top: 25px;
  }

  .btn {
    width: 337px;
    height: 48px;
    background: #3b6fdc;
    border-radius: 4px;
    margin-top: 67px;
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

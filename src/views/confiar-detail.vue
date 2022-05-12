<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <van-tabs v-model="active" color="rgba(58, 110, 218, 1)">
        <van-tab title="当前委托"></van-tab>
        <van-tab title="历史委托"></van-tab>
      </van-tabs>
      <img src="@/assets/images/zhcc_更多 拷贝 2.png" alt="" />
    </section>

    <section class="content">
      <template v-if="active === 0">
        <input type="text" placeholder="交易对" />

        <input type="text" placeholder="类型" />

        <input type="text" placeholder="交易方向" />

        <input type="text" placeholder="开始时间" />

        <input type="text" placeholder="结束时间" />

        <div class="btns">
          <span>重置</span>
          <span class="confirm">确定</span>
        </div>
      </template>

      <template v-else>
        <img src="@/assets/images/image-removebg-preview.png" alt="">
        <span class="no_data">暂无数据</span>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ConfiarDetail',

  data () {
    return {
      active: 0
    }
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  .topbar {
    img {
      position: absolute;
      right: 13px;
      height: 13px;
    }
  }

  .content {
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 334px;
      height: 45px;
      border: 1px solid #dedde5;
      border-radius: 3px;
      padding: 0 15px;
      outline: none;
      margin-top: 16px;
    }

    .btns {
      width: 100%;
      height: 44px;
      margin-top: 23px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 16px;

      span {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(237, 244, 252, 1);
        border-radius: 4px;
        font-size: 15px;
        font-weight: 500;
        color: #3B6FDC;
      }

      .confirm {
        background-color: rgba(59, 111, 220, 1);
        color: rgba(255, 255, 255, 1);
      }
    }

    img {
      width: 132px;
      height: 110px;
      margin-top: 100px;
    }

    .no_data {
      font-size: 15px;
      font-weight: 400;
      color: #8E94A0;
      margin-top: 33px;
    }
  }
}
</style>

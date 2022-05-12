<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>帮助中心</span>
    </section>

    <section class="content">
      <div class="item" v-for="index in 5" :key="index" @click="$router.push('/help-content')">
        <div class="title">
          <span>交易指南</span>
          <img src="@/assets/images/返回 拷贝.png" alt="" />
        </div>

        <span class="item_content">
          如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?
        </span>

        <div class="time">
          2014-08-26 13:18:54

          <span class="btn">更多</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style lang="less" scoped>
.page_root {
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    .item {
      width: 100%;
      height: 135px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px 0;

      .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 15px;
          font-weight: 600;
          color: #000000;
        }

        img {
          height: 10px;
        }
      }

      .item_content {
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .time {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        font-size: 12px;
        font-weight: 400;
        color: #A2A4A7;

        .btn {
          min-width: 56px;
          height: 26px;
          padding: 0 15px;
          background: #3453C4;
          border-radius: 13px;
          font-size: 14px;
          font-weight: 400;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>

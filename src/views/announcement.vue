<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>公告中心</span>
    </section>

    <div
      class="item"
      v-for="index in 14"
      :key="index"
      @click="$router.push('/announcement-content')"
    >
      <span class="content">
        如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?
      </span>
      <span class="time"> 2014-08-26 13:18:54 </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Announcement',

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  background-color: rgba(246, 247, 251, 1);

  .item {
    width: 344px;
    height: 91px;
    background: #ffffff;
    border-radius: 7px;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;

    .content {
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
      font-size: 12px;
      font-weight: 400;
      color: #a2a4a7;
    }
  }
}
</style>

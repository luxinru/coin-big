<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>公告中心</span>
    </section>

    <section class="title">Btcoin server update announcement</section>

    <section class="content">
      respected user : Btcoin has attracted more attention from users aroundthe
      world , and the number of users on the platform hasincreased sharply . In
      order to provide customers with abetter service experience , the server
      will be upgraded at22 : 30 on November 00 , 2021 , and the upgrade
      timewill be 8 hours The specific maintenance time may be delayedaccording
      to the actual situation , please pay attention !
    </section>
  </div>
</template>

<script>
export default {
  name: 'AnnouncementContent',

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 20px;
  .title {
    width: 100%;
    margin-top: 24px;
    font-size: 21px;
    font-weight: 500;
    color: #12141f;
    text-align: center;
  }

  .content {
    width: 100%;
    margin-top: 24px;
    font-size: 16px;
    font-weight: 400;
    color: #13161B;
  }
}
</style>

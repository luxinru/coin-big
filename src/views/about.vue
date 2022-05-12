<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>关于我们</span>
    </section>

    <section class="title">about bitcoin</section>

    <section class="content">
      <p>
        Btcoin International Digital Encrypted Asset TradingPlatform is a
        comprehensive digital asset tradingplatform , we have the leading
        technical strengthquality customer service and good user experiencefor
        the vast number of digital money lovers to providea free online exchange
        platform
      </p>

      <p>
        Btcoin International Digital Encrypted Asset TradingPlatform also
        provides digital currency white paperplanning , encryption algorithm
        adjustment , digitalcurrency research and development , trading
        platformon the block chain services
      </p>

      <p>
        Btcoin International Digital Encrypted Asset TradingPlatform Overseas
        Operating Center is set up inSingapore , Cambodia , Marshall , Beijing ,
        ZhengzhoShenzhen , China headquarters in Hainan LingshuiQingshuiwan
        International Information Industry Park .
      </p>
    </section>

    <section class="title">Btcoin Idea</section>

    <section class="content">
      <p>
        At present, the development of digital assets is in fullswing. Btcoin
        will screen high-quality digital assetsattach importance to the
        transparency andgovernance structure of the project, on the basis ofthe
        screening criteria of the formation of a self-ratingsystem, and refer to
        the decision of market investorsto jointly explore the value of
        high-quality digitaassets。Our philosophy is to work with every member
        whocomes together freely to create a high-qualityecological soil for
        value circulation and cocultivation。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',

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
    margin-top: 24px;
    font-size: 21px;
    font-weight: 500;
    color: #12141f;
    text-align: center;
    padding: 0 20px;
  }

  .content {
    width: 100%;
    margin-top: 24px;
    font-size: 16px;
    font-weight: 400;
    color: #13161b;
    padding: 0 20px;

    p {
      margin-top: 16px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>

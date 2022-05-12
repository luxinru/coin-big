<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>充币</span>
    </section>

    <div class="main_title">
      <img v-if="type === '1'" src="@/assets/images/BTC.png" alt="" />
      <img v-if="type === '2'" src="@/assets/images/ETH.png" alt="" />
      <img v-if="type === '3'" src="@/assets/images/TUSD.png" alt="" />
      <img v-if="type === '4'" src="@/assets/images/circle-usdt.png" alt="" />
      <span v-if="type === '1'">BTC充币</span>
      <span v-if="type === '2'">ETH充币</span>
      <span v-if="type === '3'">TUSDT充币</span>
      <span v-if="type === '4'">EUSDT充币</span>
    </div>

    <section class="code_box"></section>

    <span class="tip"> 保存二维码至相册 </span>

    <span class="code"> 1k6bhijdnp4csetfrgcewkkcqah2ajyd5q </span>

    <div class="btn">复制地址</div>

    <span class="num"> 946495 </span>

    <span class="memo"> 充值时请输入备注(Memo) </span>

    <section class="content">
      <p>・最小充值金额:0.0015BTC,小于最小金额的充值将不会上账</p>
      <p>・请勿向上述地址充值任何非币种资产,否则资产将不可找回。</p>
      <p>
        ・您充值至上述地址后,需要整个区块链网络节点的确认般区块链主网3次网络确认后到账。
      </p>
      <p>
        ・您的充值地址不会经常改变,可以重复充值;如有更改,我们会尽量通过网站公告或邮件通知您。
      </p>
      <p>・请务必确认操作环境安全,防止信息被簒改或泄露。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RechargeDetails',

  data () {
    return {}
  },

  computed: {
    type () {
      return this.$route.query.type
    }
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  .main_title {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 14px;
    margin-top: 16px;

    img {
      height: 23px;
      margin-right: 13px;
    }

    span {
      font-size: 16px;
      font-weight: 500;
      color: #000000;
    }
  }

  .code_box {
    width: 150px;
    height: 150px;
    margin-top: 44px;
    background-color: red;
  }

  .tip {
    font-size: 13px;
    font-weight: 400;
    color: #5a5f63;
    margin-top: 19px;
  }

  .code {
    font-size: 13px;
    font-weight: 400;
    color: #1b1b20;
    margin-top: 39px;
  }

  .btn {
    min-width: 116px;
    height: 31px;
    background: #f6f7fb;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    color: #546169;
    padding: 0 16px;
    margin-top: 35px;
  }

  .num {
    font-size: 13px;
    font-weight: 400;
    color: #1b1b20;
    margin-top: 25px;
  }

  .memo {
    font-size: 13px;
    font-weight: 400;
    color: #c4651f;
    margin-top: 29px;
  }

  .content {
    width: 100%;
    padding: 0 16px;
    margin-top: 47px;
    font-size: 13px;
    font-weight: 400;
    color: #9B9EA3;
    line-height: 19px;
    display: flex;
    flex-direction: column;

    p {
      width: 100%;
    }
  }
}
</style>

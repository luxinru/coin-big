<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>帮助中心</span>
    </section>

    <section class="content">
      <div>
        如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?如何用人民币/美元购买数字货币?
      </div>
      <span> 2014-08-26 13:18:54 </span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelpContent'
}
</script>

<style lang="less" scoped>
.page_root {
  .content {
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    div {
      font-size: 14px;
      font-weight: 400;
      color: #333333;
    }

    span {
      font-size: 12px;
      font-weight: 400;
      color: #a2a4a7;
      margin-top: 18px;
    }
  }
}
</style>

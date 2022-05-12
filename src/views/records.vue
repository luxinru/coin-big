<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <div class="tabs">
        <span :class="{ active: active === 1 }" @click="active = 1">
          充币记录
        </span>
        <span :class="{ active: active === 2 }" @click="active = 2">
          提币记录
        </span>
      </div>
      <img src="@/assets/images/zhcc_更多 拷贝 2.png" alt="" />
    </section>

    <section class="item" v-for="index in 8" :key="index">
      <img src="@/assets/images/circle-usdt.png" alt="" />
      <div class="info">
        <div>
          <span>+ 517.49 USDT
            <span v-if="active === 2">手续费:50</span>
          </span>
          <span>失败</span>
        </div>
        <div>
          <span>2022-02-2316:19:53</span>
          <span>TPKK69...ALSKHD</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Records',

  data () {
    return {
      active: 1
    }
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  .topbar {
    .tabs {
      width: 165px;
      height: 31px;
      background-color: rgba(238, 242, 254, 1);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px 3px;

      span {
        flex: 1 0;
        height: 100%;
        font-size: 13px;
        font-weight: 400;
        color: #535b70;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .active {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(59, 111, 220, 1);
        border-radius: 4px;
      }
    }

    img {
      position: absolute;
      right: 13px;
      height: 13px;
    }
  }

  .item {
    width: 100%;
    height: 83px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    padding: 0 16px;

    img {
      height: 36px;
      margin-right: 12px;
    }

    .info {
      flex: 1 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      justify-content: space-between;
      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:nth-child(1) {
          span {
            &:first-child {
              font-size: 16px;
              font-weight: 600;
              color: #131521;
              display: flex;
              align-items: center;

              span {
                width: 80px;
                height: 20px;
                background: rgba(59, 111, 220, 0.2);
                border-radius: 3px;
                font-size: 11px;
                font-weight: 400;
                color: #3B6FDC;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 14px;
              }
            }

            &:last-child {
              font-size: 13px;
              font-weight: 400;
              color: #51565A;
            }
          }
        }

        &:nth-child(2) {
          span {
            font-size: 13px;
            font-weight: 400;
            color: #89929B;
          }
        }
      }
    }
  }
}
</style>

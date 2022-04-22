<template>
  <div class="page_root">
    <section class="header">
      <div class="icons">
        <van-icon
          name="shield-o"
          size="18"
          @click="$router.push({ path: '/security-settings' })"
        />
        <van-icon name="setting-o" size="18" />
      </div>

      <div class="user">
        <img class="info" src="" />
        <span class="name">sam</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
    </section>

    <section class="contents">
      <div class="item">
        <img class="icon" src="@/assets/images/我的_slices/资产.png" />
        <span class="name">我的资产</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <img class="icon" src="@/assets/images/我的_slices/资金流水.png" />
        <span class="name">资产流水</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <img class="icon" src="@/assets/images/我的_slices/设置 (2).png" />
        <span class="name">收款设置</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <img class="icon" src="@/assets/images/我的_slices/密码.png" />
        <span class="name">资金密码</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <img class="icon" src="@/assets/images/我的_slices/品类管理.png" />
        <span class="name">货币管理</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <img class="icon" src="@/assets/images/我的_slices/邀请有礼.png" />
        <span class="name">我的活动</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <img class="icon" src="@/assets/images/我的_slices/矿机.png" />
        <span class="name">我的矿机</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <img class="icon" src="@/assets/images/我的_slices/锁仓转入余额.png" />
        <span class="name">我的锁仓</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
      <div class="item">
        <img class="icon" src="@/assets/images/我的_slices/邀请.png" />
        <span class="name">邀请链接</span>
        <img class="more" src="@/assets/images/邀请.png" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Mine',

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  background-color: rgba(246, 247, 251, 1);
  .header {
    width: 100%;
    min-height: 145px;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    .icons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 24px;
      margin-top: 11px;
      i {
        &:first-child {
          margin-right: 18px;
        }
      }
    }

    .user {
      width: 100%;
      height: 54px;
      display: flex;
      align-items: center;
      padding: 0 24px;
      margin-top: 25px;

      .info {
        width: 54px;
        height: 54px;
        background-color: rgba(59, 111, 220, 1);
        border-radius: 50%;
        overflow: hidden;
      }

      .name {
        flex: 1 0;
        font-size: 19px;
        font-weight: 500;
        color: #111113;
        margin: 0 25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .more {
        height: 15px;
      }
    }
  }
  .contents {
    width: 344px;
    background: #ffffff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    margin: 13px 0;

    .item {
      width: 100%;
      height: 58px;
      display: flex;
      align-items: center;
      padding: 0 17px;
      border-bottom: 1px solid rgba(238, 238, 238, 1);

      .icon {
        height: 27px;
      }

      span {
        flex: 1 0;
        font-size: 16px;
        font-weight: 400;
        color: #131521;
        margin: 0 11px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .more {
        height: 10px;
      }
    }
  }
}
</style>

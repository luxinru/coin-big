<template>
  <div class="page_root">
    <img class="logo" src="@/assets/images/CoinBig@2x.png" alt="" />

    <div class="item">
      <van-field
        v-model="form.username"
        :placeholder="$t('uc.login.loginvalidate')"
      />
    </div>

    <div class="item">
      <van-field
        v-model="form.password"
        :type="passwordType"
        :placeholder="$t('uc.login.pwdvalidate1')"
      />
      <img
        src="@/assets/images/隐藏密码 拷贝.png"
        @click="isShowPassword = !isShowPassword"
      />
    </div>

    <div class="item">
      <van-field
        v-model="form.password2"
        :type="passwordType2"
        :placeholder="$t('uc.forget.confirmpwd')"
      />
      <img
        src="@/assets/images/隐藏密码 拷贝.png"
        @click="isShowPassword = !isShowPassword"
      />
    </div>

    <div class="item">
      <van-field
        v-model="form.smscode"
        :placeholder="$t('uc.forget.smscode')"
      />
    </div>

    <div class="item">
      <van-field
        v-model="form.promotion"
        :placeholder="$t('uc.regist.promotion')"
      />
    </div>

    <section class="footer">
      <span>
        <van-checkbox v-model="checked" shape="square" checked-color="#1989fa">
        </van-checkbox>
        <p>{{ $t('uc.regist.agreement') }}</p>
        <p>{{ $t('uc.regist.userprotocol') }}</p>
      </span>
      <span @click="$router.push({ path: '/login' })">{{
        $t('uc.forget.hasaccount')
      }}</span>
    </section>

    <Btn class="btnmargin" :title="$t('uc.login.register')"></Btn>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data () {
    return {
      form: {
        username: '',
        password: '',
        password2: '',
        smscode: '',
        promotion: ''
      },
      checked: false,
      isShowPassword: false,
      isShowPassword2: false
    }
  },

  computed: {
    passwordType () {
      return this.isShowPassword ? 'text' : 'password'
    },
    passwordType2 () {
      return this.isShowPassword2 ? 'text' : 'password'
    }
  }
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 18px;

  .logo {
    height: 34px;
    margin: 52px 0 23px 0;
  }

  .item {
    width: 100%;
    height: 49px;
    border: 1px solid #dbe0e4;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-top: 40px;
    padding: 0 16px;

    img {
      height: 14px;
    }

    /deep/ .van-field {
      flex: 1 0;
      padding: 0;
    }
  }

  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    span {
      flex: 1 0;
      display: flex;
      align-items: center;
      word-break: break-all;
      font-size: 13px;
      font-weight: 400;
      color: #4768d3;
      &:first-child {
        margin-bottom: 4px;
        p {
          font-size: 13px;
          font-weight: 400;
          color: #9ba0a4;
          margin-left: 4px;

          &:last-child {
            color: #4768d3;
          }
        }
      }
    }
  }
}
</style>

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

    <section class="footer">
      <span>{{ $t('uc.login.forget') }}</span>
      <span>
        <p>{{ $t('uc.login.noaccount') }}</p>
        <p @click="$router.push({ path: '/register' })">
          {{ $t('uc.login.goregister') }}
        </p>
      </span>
    </section>

    <Btn
      class="btnmargin"
      :title="$t('uc.login.login')"
      @click="$router.push({ name: 'Home' })"
    ></Btn>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      isShowPassword: false
    }
  },

  computed: {
    passwordType () {
      return this.isShowPassword ? 'text' : 'password'
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
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      flex: 1 0;
      display: flex;
      align-items: center;
      word-break: break-all;
      justify-content: flex-end;
      &:first-child {
        font-size: 15px;
        font-weight: 400;
        color: #4768d3;
        justify-content: flex-start;
      }

      p {
        font-size: 15px;
        font-weight: 400;
        color: #676b6a;

        &:last-child {
          color: #4768d3;
        }
      }
    }
  }
}
</style>

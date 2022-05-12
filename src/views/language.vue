<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
      <span>语言设置</span>
    </section>

    <section
      class="item"
      :class="{ active: language === 1 }"
      @click="language = 1"
    >
      <span>中文</span>
      <img src="@/assets/images/对勾.png" alt="" />
    </section>

    <section
      class="item"
      :class="{ active: language === 2 }"
      @click="language = 2"
    >
      <span>English</span>
      <img src="@/assets/images/对勾.png" alt="" />
    </section>

    <section
      class="item"
      :class="{ active: language === 3 }"
      @click="language = 3"
    >
      <span>繁體中文</span>
      <img src="@/assets/images/对勾.png" alt="" />
    </section>

    <section
      class="item"
      :class="{ active: language === 4 }"
      @click="language = 4"
    >
      <span>日本</span>
      <img src="@/assets/images/对勾.png" alt="" />
    </section>

    <section
      class="item"
      :class="{ active: language === 5 }"
      @click="language = 5"
    >
      <span>한국인</span>
      <img src="@/assets/images/对勾.png" alt="" />
    </section>

    <section
      class="item"
      :class="{ active: language === 6 }"
      @click="language = 6"
    >
      <span>Deutsch</span>
      <img src="@/assets/images/对勾.png" alt="" />
    </section>

    <section
      class="item"
      :class="{ active: language === 7 }"
      @click="language = 7"
    >
      <span>Français</span>
      <img src="@/assets/images/对勾.png" alt="" />
    </section>

    <section
      class="item"
      :class="{ active: language === 8 }"
      @click="language = 8"
    >
      <span>Italiano</span>
      <img src="@/assets/images/对勾.png" alt="" />
    </section>

    <section
      class="item"
      :class="{ active: language === 9 }"
      @click="language = 9"
    >
      <span>español</span>
      <img src="@/assets/images/对勾.png" alt="" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Language',

  data () {
    return {
      language: 1
    }
  },

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  .item {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    span {
      font-size: 15px;
      font-weight: 400;
      color: #131521;
    }

    img {
      height: 10px;
      display: none;
    }
  }

  .active {
    img {
      display: block;
    }
  }
}
</style>

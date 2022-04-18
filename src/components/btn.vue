<template>
  <div class="btn_root default" @click="onClick">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Btn',

  props: {
    title: {
      type: String,
      default: 'default'
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.btn_root {
  width: 100%;
  height: 48px;
  background: #3b6fdc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.default {
  background: #3b6fdc;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
}
</style>

<template>
  <div id="app">
    <top></top>
    <key></key>
  </div>
</template>
<script>
import top from "./view/Top.vue";
import key from "./view/Key.vue";
export default {
  components: {
    top,
    key,
  },
  created() {
    console.log('welcome,这是我的第一个前端项目，右上角有源码地址，如果有帮助的话可以给一颗star,接口地址http://124.223.37.254:3000/')
  }
};
</script>
<style lang="less">
</style>

<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <span style="margin-left: 30px;cursor:pointer">
          <img src="../assets/音乐演奏.svg" style="width:60px" />
        </span>
      </div>
      <div class="history-wrapper">天空好想下雨，我好想住你隔壁</div>
    </div>
    <div class="right-box">
      <span class="gitee" style="margin-right: 30px; font-size: 25px; font-weight: 600;">
        <a href="https://gitee.com/hou-mingjun/vue-music-player" target="blank">Gitee</a>
      </span>
      <div class="el-input el-input--small el-input--prefix">
        <span class="el-input__prefix" @click="toResult" style="cursor:pointer">
          <i class="el-input__icon el-icon-search"></i>
        </span>
        <!-- 搜索框 -->
        <input
          type="text"
          v-model.trim="search"
          placeholder="多彩世界"
          class="el-input__inner"
          @keyup.enter="toResult"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    toResult() {
      if (this.search == 0) {
        this.$message.warning('请输入内容')
      } else {
        this.$router.push(`/result?keywords=${this.search}`)
        this.search = ''
      }
    }
  }
}
</script>
<style>
</style>
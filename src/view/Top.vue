<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <span style="margin-left: 30px;">
          <img src="../assets/音乐演奏.svg" style="width:60px" />
        </span>
        <!-- <span class="iconfont icon-home"></span>
        <span class="iconfont icon-sami-select"></span>
        <span class="iconfont icon-full-screen"></span>-->
      </div>
      <div class="history-wrapper">
        <!-- <span class="iconfont icon-arrow-lift"></span>
        <span class="iconfont icon-arrow-right"></span>-->
      </div>
    </div>
    <div class="right-box">
      <span class="gitee" style="margin-right: 30px; font-size: 25px; font-weight: 600;">
        <a href="https://gitee.com/hou-mingjun/vue-music-player" target="blank">Gitee</a>
      </span>
      <div class="el-input el-input--small el-input--prefix">
        <!-- 搜索框 -->
        <input type="text" placeholder="搜索" class="el-input__inner" />
        <span class="el-input__prefix">
          <i class="el-input__icon el-icon-search"></i>
        </span>
      </div>
    </div>
  </div>
</template>

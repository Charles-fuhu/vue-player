<template>
  <div class="playlists-container">
    <!-- 同步 -->
    <div class="top-card">
      <div class="icon-wrap">
        <!-- 封面 -->
        <img :src="topList.coverImgUrl" alt="" />
      </div>

      <div class="content-wrap">
        <div class="tag">精品歌单</div>
        <!-- 标题 -->
        <div class="title">{{ topList.name }}</div>
        <!-- 介绍 -->
        <div class="info">{{ topList.description }}</div>
      </div>
      <!-- 背景 -->
      <img :src="topList.coverImgUrl" alt="" class="bg" />
      <div class="bg-mask"></div>
    </div>
    
    <div class="tab-container">
      <!-- tab栏 顶部 -->
      <div class="tab-bar" style="display:flex ">
        <span> 全部 </span>
        <span> 欧美 </span>
        <span> 华语 </span>
        <span> 流行 </span>
        <span> 说唱 </span>
        <span> 摇滚 </span>
        <span> 民谣 </span>
        <span> 电子 </span>
        <span> 轻音乐 </span>
        <span> 影视原声 </span>
        <span> ACG </span>
        <span> 怀旧 </span>
        <span> 治愈 </span>
        <span> 旅行 </span>
      </div>
      <!-- tab的内容区域 -->
      <div class="tab-content">
        <div class="items">
          <div class="item" v-for="(item, index) in playList" :key="index">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{ item.playCount }}</span>
              </div>

              <img :src="item.coverImgUrl" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页器
      total 总条数
      current-page 当前页
      page-size 每页多少条数据
      current-change 页码改变事件
     -->
    <el-pagination></el-pagination>
  </div>
</template>

<script>
import { highquality, topList } from "../api/playlist";
export default {
  data() {
    return {
      // 顶部精品歌单
      topList: {},
      playList: [],
    };
  },
  mounted() {
    highquality("全部").then((res) => {
      this.topList = res.data.playlists[6];
    });
    topList().then((res) => {
      console.log(res.data.playlists);
      this.playList = res.data.playlists;
    });
  },
};
</script>

<style>
</style>
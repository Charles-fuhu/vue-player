<template>
  <div class="index-container">
    <!-- 导航区域 -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discovery">
            <span class="iconfont icon-find-music"></span>
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/playlist">
            <span class="iconfont icon-music-list"></span>
            推荐歌单
          </router-link>
        </li>
        <li>
          <router-link to="/songs">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/mvs">
            <span class="iconfont icon-mv"></span>
            最新MV
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 主体区域 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 播放标签 -->

    <div class="player">
      <!-- autoplay 自动播放 -->
      <audio
        :src="url"
        controls
        autoplay
      ></audio>
    </div>
  </div>
</template>

<script>
import VueAplayer from "vue-aplayer";
export default {
  components: {
    VueAplayer,
  },
  name: "index",
  data () {
    return {
      url:''
    }
  }
};
</script>

<style>
</style>
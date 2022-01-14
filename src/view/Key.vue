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

    <div class="player">
      <aplayer
        :audio="playerList"
        :lrcType="1"
        :mutex="mutex"
        :fixed="fixed"
        ref="aplayer"
        @canplay="autoplay"
        :volume="volume"
      ></aplayer>
    </div>
    <!-- 播放标签 -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      volume: 0.3,
      mutex: true,
      id: 167876,
      fixed: true,

    };
  },
  methods: {
    //当MV播放时，音乐暂停
    autoPause() {
      this.$refs.aplayer.pause()
    },
    //当音乐缓存准备完毕自动播放
    autoplay() {
      this.$refs.aplayer.play()
      
    },
  },
  computed: {
    ...mapState(['playerList'])
  },
}
</script>
<style>
</style>
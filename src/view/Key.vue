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
      <router-view @getInfo="setPlayer"></router-view>
    </div>
    <!-- 播放标签 -->

    <div class="player">
      <aplayer :audio="songLists" :lrcType="1" :autoplay="auto" mutex listFolded></aplayer>
    </div>
  </div>
</template>

<script>
import { songUrl } from '../api/discovery'
export default {
  data() {
    return {
      auto:true,
      songLists: [
        {
          id: 0,
          url: '',
          name: '',
          artist: '',
          cover: '',
          lrc: ''
        }
      ]
    };
  },
  methods: {
    setPlayer(item) {
      
      this.songLists[0].id = item.id
      this.songLists[0].cover = item.album.picUrl
      this.songLists[0].name = item.name
      this.songLists[0].artist = item.album.artists['0'].name
      this.setMusicPlayer()
    },
    async setMusicPlayer() {
      let id = this.songLists[0].id
       const {data} = await songUrl({ id: id })
       
       this.songLists[0].url = data.data[0].url

    }

  }

}

</script>

<style>
</style>
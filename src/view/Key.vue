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
      <router-view @passMusicId="setIdFromPlayList" @getId="setId" @getMusicId="setIdFromResult"></router-view>
    </div>
    <div class="player">
      <aplayer :audio="songLists" :lrcType="1" :mutex="mutex" :fixed="fixed"></aplayer>
    </div>
    <!-- 播放标签 -->
  </div>
</template>
<script>
import { songUrl, } from '../api/discovery'
import { getLyc, getSongDetail } from '../api/song'
export default {
  data() {
    return {
      mutex: true,
      id: 0,
      fixed: false,
      auto: true,
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
    //设置歌曲播放链接
    async setMusicPlayer(id) {
      const { data } = await songUrl({ id: id })
      this.songLists[0].url = data.data[0].url
    },
    //设置歌词
    async setLyric(id) {
      const { data } = await getLyc(id)
      this.songLists[0].lrc = data.lrc.lyric
    },
    //更具不同子组件传来的ID设置歌曲id
    setIdFromPlayList(id) {
      this.id = id
    },
    setIdFromResult(id) {
      this.id = id
    },
    setId(id) {
      this.id = id
    },
    pushData(id) {
      this.id = id
    },
    //根据id获取歌名,歌手名，图片地址，渲染播放器数据
    async setPlayerData() {
      const { data: res } = await getSongDetail({ ids: this.id })
      this.songLists[0].id = this.id
      this.songLists[0].cover = res.songs[0].al.picUrl
      this.songLists[0].name = res.songs[0].name
      this.songLists[0].artist = res.songs[0].ar[0].name
      this.setMusicPlayer(this.id)
      this.setLyric(this.id)
    }
  },
  watch: {
    id() {
      this.setPlayerData()
    }
  }
}
</script>
<style>
</style>
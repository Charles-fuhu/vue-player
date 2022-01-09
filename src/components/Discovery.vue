<template>
  <div class="discovery-container">
    <el-carousel :interval="4000" type="card" height="200px">
      <!--循环生成标签，轮播图-->
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img v-lazy="item.imageUrl" alt="" class="circle" />
      </el-carousel-item>
    </el-carousel>

    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">推荐歌单</h3>
      <div class="items">
        <div class="item" v-for="(songs, index) in playList" :key="index">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">热门推荐</span>
            </div>
            <img v-lazy="songs.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ songs.name }}</p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">最新音乐</h3>
      <div class="items">
        <div class="item" v-for="(song, index) in newSong" :key="index">
          <div class="img-wrap">
            <!-- 封面 -->
            <img v-lazy="song.picUrl" />
            <span class="iconfont icon-play" @click="playMusic(song.id)"></span>
          </div>
          <div class="song-wrap">
            <!-- 歌名 -->
            <div class="song-name">{{ song.name }}</div>
            <!-- 歌手名 -->
            <div class="singer">{{ song.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div class="item" v-for="(mv,index) in  MV" :key="index" @click="toMv(mv.id)">
          <div class="img-wrap">
            <img v-lazy="mv.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <!-- 播放次数 -->
              <div class="num">{{mv.playCount | formatCount }}</div>
            </div>
          </div>
          <div class="info-wrap">
            <!-- mv名 -->
            <div class="name">{{mv.name}}</div>
            <!-- 歌手名 -->
            <div class="singer">{{mv.artistName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getBanner,
  getNewSong,
  getSongList,
  songUrl,
  newMV,
} from "../api/discovery";

export default {
  data() {
    return {
      bannerList: [],
      playList: [],
      newSong: [],
      MV: [],
    };
  },
  methods: {
    toMv(id){
      this.$router.push(`/mv?id=${id}`)
    },
    playMusic(id) {
      songUrl({ id: id }).then((res) => {
        this.$parent.url = res.data.data[0].url;
        // console.log(this.$parent.url)
      });
    },
  },
  created() {
    getBanner().then((res) => {
      this.bannerList = res.data.banners;
    });
    getSongList(5).then((res) => {
      this.playList = res.data.result;
    });
    getNewSong(10).then((res) => {
      this.newSong = res.data.result;
    });
    newMV(4).then((res) => {
      // console.log(res.data.result);
      this.MV = res.data.result;
    });
  },
};
</script>

<style>
</style>
<template>
  <div class="songs-container">
    <div class="tab-bar">
      <span class="item" :class="{ active: type == 0 }" @click="type = 0">全部</span>
      <span class="item" :class="{ active: type == 7 }" @click="type = 7">华语</span>
      <span class="item" :class="{ active: type == 96 }" @click="type = 96">欧美</span>
      <span class="item" :class="{ active: type == 8 }" @click="type = 8">日本</span>
      <span class="item" :class="{ active: type == 16 }" @click="type = 16">韩国</span>
    </div>
    <!-- 底部的table -->
    <table class="el-table playlist-table">
      <thead>
        <th></th>
        <th></th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in lists"
          :key="item.id"
          v-show="index < 10"
          class="el-table__row"
          @click="getInfo(item)"
        >
          <td>{{ index + 1 }}</td>
          <td>
            <div class="img-wrap">
              <img v-lazy="item.album.picUrl" :key="item.album.picUrl" alt />
              <!-- 播放按钮 -->
              <span class="iconfont icon-play" ></span>
            </div>
          </td>
          <td>
            <div class="song-wrap">
              <div class="name-wrap">
                <span>{{ item.name }}</span>
                <span class="iconfont icon-mv"></span>
              </div>
              <span></span>
            </div>
          </td>
          <td>{{ item.album.artists['0'].name }}</td>
          <td>{{ item.album.name }}</td>
          <td>{{ item.duration | formatDuration }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getSongData } from "../api/song";


export default {
  data() {
    return {
      type: 0,
      lists: [],
    }
  },
  methods: {
    getData() {
      getSongData({ type: this.type }).then(res => {
        this.lists = res.data.data
      })


    },//拿到每一首歌的数据（图片，歌手，歌名）
    getInfo(item) {

      this.$emit('getInfo', item)
    }
  },
  watch: {
    type() {
      this.getData()
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style>
</style>
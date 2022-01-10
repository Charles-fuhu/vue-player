<template>
  <div class="result-container" ref="container">
    <div class="title-wrap">
      <h2 class="title">{{ $route.query.keywords }}</h2>
      <span class="sub-title">找到{{ total }}个结果</span>
    </div>
    <el-tabs v-model="type">
      <el-tab-pane label="歌曲" name="1">
        <table class="el-table">
          <thead>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </thead>
          <tbody>
            <tr
              class="el-table__row"
              v-for="(item, index) in songList"
              :key="item.id"
              @click="playMusic(item.id)"
            >
              <td>{{ index + 1 }}</td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <span class="name">{{ item.name }}</span>
                    <span v-if="item.mvid != 0" class="iconfont icon-mv" @click="toMV(item.mvid)"></span>
                  </div>
                </div>
              </td>
              <td>{{ item.artists[0].name }}</td>
              <td>{{ item.album.name }}</td>
              <td>{{ item.duration | formatDuration }}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="1000">
        <div class="items">
          <div class="item" v-for="item in playList" :key="item.id">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{ item.playCount | formatCount }}</span>
              </div>
              <img v-lazy="item.coverImgUrl" alt />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="1004">
        <div class="items mv">
          <div class="item" v-for="item in mvList" :key="item.id" @click="toMV(item.id)">
            <div class="img-wrap">
              <img :src="item.cover" alt />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">{{ item.playCount | formatCount }}</div>
              </div>
              <span class="time">{{ item.duration | formatDuration }}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{ item.name }}</div>
              <div class="singer">{{ item.artistName }}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      :page-size="limit"
    ></el-pagination>
  </div>
</template>

<script>
import { songUrl } from "../api/discovery";
import { search } from "../api/search";
export default {
  data() {
    return {
      type: '1',
      // 页容量
      limit: 15,
      // 页码
      page: 1,
      // 总条数
      total: 0,
      songList: [],
      playList: [],
      mvList: []
    };
  },
  methods: {
     toMV(mvid) {
      this.$router.push(`/mv?id=${mvid}`);
    },
    handleCurrentChange(val) {
      this.page = val;
      this.searchResult();
    },
    async playMusic(id) {
      const { data } = await songUrl({ id: id })
      this.$parent.songLists[0].url = data.data[0].url
    },
    searchResult() {
      const { limit, type } = this;
      const { keywords } = this.$route.query;
      // console.log(this.$route.query)
      search({
        limit,
        type,
        keywords,
        offset: (this.page - 1) * limit
      }).then(res => {
        // console.log(res.data.result)
        // window.console.log(res)
        // 根据类型不同
        switch (this.type) {
          case '1':
            this.songList = res.data.result.songs;
            this.total = res.data.result.songCount;
            break;
          case '1000':
            this.playList = res.data.result.playlists;
            this.total = res.data.result.playlistCount;
            break;

          default:
            this.mvList = res.data.result.mvs;
            this.total = res.data.result.mvCount;
            break;
        }
      });
    }

  },
  watch: {
    type: [
      function () {
        this.limit = this.type == '1004' ? 12 : 15;
      },
      'searchResult'
    ],
    '$route.query.keywords': 'searchResult'
  },
  created() {
    this.searchResult();
  },
};
</script>

<style>
</style>
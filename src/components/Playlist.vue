<template>
  <div class="playlists-container">
    <!-- 同步 -->
    <div class="top-card" v-if="listName">
      <div class="icon-wrap">
        <img v-lazy="listCover" alt />
      </div>
      <div class="content-wrap">
        <div class="tag">精品歌单</div>
        <div class="title">{{ listName }}</div>
        <div class="info">{{ listDesc }}</div>
      </div>
      <img v-lazy="listCover" alt class="bg" />
      <div class="bg-mask"></div>
    </div>
    <div class="tab-container">
      <!-- tab栏 顶部 -->
      <div class="tab-bar">
        <span class="item" :class="{ active: cat == '欧美' }" @click="cat = '欧美'">欧美</span>
        <span class="item" :class="{ active: cat == '华语' }" @click="cat = '华语'">华语</span>
        <span class="item" :class="{ active: cat == '流行' }" @click="cat = '流行'">流行</span>
        <span class="item" :class="{ active: cat == '说唱' }" @click="cat = '说唱'">说唱</span>
        <span class="item" :class="{ active: cat == '摇滚' }" @click="cat = '摇滚'">摇滚</span>
        <span class="item" :class="{ active: cat == '民谣' }" @click="cat = '民谣'">民谣</span>
        <span class="item" :class="{ active: cat == '电子' }" @click="cat = '电子'">电子</span>
        <span class="item" :class="{ active: cat == '轻音乐' }" @click="cat = '轻音乐'">轻音乐</span>
        <span class="item" :class="{ active: cat == '影视原声' }" @click="cat = '影视原声'">影视原声</span>
        <span class="item" :class="{ active: cat == 'ACG' }" @click="cat = 'ACG'">ACG</span>
        <span class="item" :class="{ active: cat == '怀旧' }" @click="cat = '怀旧'">怀旧</span>
        <span class="item" :class="{ active: cat == '治愈' }" @click="cat = '治愈'">治愈</span>
        <span class="item" :class="{ active: cat == '旅行' }" @click="cat = '旅行'">旅行</span>
      </div>
      <!-- tab的内容区域 -->
      <div class="tab-content">
        <div class="items">
          <div
            class="item"
            v-for="(item,index) in playList"
            :key="index"
            @click="toPlayList(item.id)"
          >
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{ item.playCount | formatCount }}</span>
              </div>
              <img v-lazy="item.coverImgUrl" alt />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="200"
      :current-page="page"
    ></el-pagination>
  </div>
</template>
<script>
import { highquality, topList } from '../api/playlist';
export default {
  name: 'recommend',
  data() {
    return {
      // 歌单分类
      cat: '华语',
      // 顶部的标题
      listName: '',
      // 顶部的描述
      listDesc: '',
      // 顶部的封面
      listCover: '',
      // 总条数
      total: 1303,
      // 页码
      page: 1,
      // 歌单列表
      playList: []
    };
  },
  watch: {
    cat() {
      this.getData();
    }
  },
  created() {
    this.getData();
  },
  methods: {
    // 去歌单详情页面
    toPlayList(id) {
      this.$router.push(`/toplaylist?id=${id}`);
    },
    // 获取歌单信息
    getData() {
      highquality({ cat: this.cat }).then(res => {
        // console.log(res.data.playlists)
        let minlenth = 0
        if (res.data.playlists.length != minlenth) {
          this.listName = res.data.playlists[0].name;
          this.listDesc = res.data.playlists[0].description;
          this.listCover = res.data.playlists[0].coverImgUrl;
        } else {
          this.listName = '';
        }
      });
      // 底部的歌单信息
      topList({
        cat: this.cat,
        offset: (this.page - 1) * 10
      }).then(res => {
        // window.console.log(res);
        this.playList = res.data.playlists;
        this.total = res.data.total;
        // console.log(typeof(res.data.total))
      });
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getData();
    }
  }
};
</script>
<style lang="scss">
</style>

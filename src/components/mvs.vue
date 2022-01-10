<template>
  <!--顶部导航-->
  <div class="mvs-container">
    <div class="filter-wrap">
      <div class="seciton-wrap">
        <span class="section-type">地区:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span class="title" :class="{ active: area == '全部' }" @click="area = '全部'">全部</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: area == '内地' }" @click="area = '内地'">内地</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: area == '港台' }" @click="area = '港台'">港台</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: area == '欧美' }" @click="area = '欧美'">欧美</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: area == '日本' }" @click="area = '日本'">日本</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: area == '韩国' }" @click="area = '韩国'">韩国</span>
          </li>
        </ul>
      </div>
      <div class="type-wrap">
        <span class="type-type">类型:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span class="title" :class="{ active: type == '全部' }" @click="type = '全部'">全部</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: type == '官方版' }" @click="type = '官方版'">官方版</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: type == '原声' }" @click="type = '原声'">原声</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: type == '现场版' }" @click="type = '现场版'">现场版</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: type == '网易出品' }" @click="type = '网易出品'">网易出品</span>
          </li>
        </ul>
      </div>
      <div class="order-wrap">
        <span class="order-type">排序:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span class="title" :class="{ active: order == '上升最快' }" @click="order = '上升最快'">上升最快</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: order == '最热' }" @click="order = '最热'">最热</span>
          </li>
          <li class="tab">
            <span class="title" :class="{ active: order == '最新' }" @click="order = '最新'">最新</span>
          </li>
        </ul>
      </div>
    </div>
    <!--MV播放窗口-->

    <!-- mv容器 -->

    <div class="mvs">
      <div class="items">
        <div v-for="item in mvList" :key="item.id" class="item" @click="toMv(item.id)">
          <div class="img-wrap">
            <img v-lazy="item.cover" alt />
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{ item.playCount | formatCount }}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{ item.name }}</div>
            <div class="singer">{{ item.artisetName }}</div>
          </div>
        </div>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="5"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getMvs } from "../api/mvs"
export default {
  data() {
    return {
      type: '全部',
      order: '上升最快',
      area: '全部',
      limit: 12,
      page: 1,
      total: 0,
      mvList: [],

    }
  },
  methods: {
    //获取mv列表数据
    async getData() {
      const { data } = await getMvs({
        area: this.area,
        order: this.order,
        type: this.type,
        offset: (this.page - 1) * this.limit,
        limit: this.limit
      })
      
      this.mvList = data.data
      if (data.count) {
        this.total = data.count
      }
    },
    //翻页功能
    handleCurrentChange(val) {
      this.page = val
      this.getData()
    },
    //给mvwatch组件传mv的id值
    toMv(id) {
      this.$router.push(`/mv?id=${id}`);
      this.$parent.url = ''

    }
  },
  created() {
    this.getData()
  },
  watch: {
    type: [
      function () {
        this.page = 1
      },
      'getData'
    ],
    order: [
      function () {
        this.page = 1
      },
      'getData'
    ],
    area: [
      function () {
        this.page = 1
      },
      'getData'
    ]
  }
}
</script>

<style>
</style>
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
        :audio="audio"
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
      audio: [{
        name: '有何不可',
        artist: '许嵩',
        url: require('../assets/有何不可.mp3'),
        cover: require('../assets/vae.jpg'), // prettier-ignore
        lrc: `[00:00.000] 作词 : 许嵩
[00:01.000] 作曲 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听
[00:35.900]哪怕好多盆水往下淋
[00:41.060]夏天快要过去
[00:43.340]请你少买冰淇淋
[00:45.680]天凉就别穿短裙
[00:47.830]别再那么淘气
[00:50.060]如果有时不那么开心
[00:52.470]我愿意将格洛米借给你
[00:55.020]你其实明白我心意
[00:58.290]为你唱这首歌没有什么风格
[01:02.976]它仅仅代表着我想给你快乐
[01:07.840]为你解冻冰河为你做一只扑火的飞蛾
[01:12.998]没有什么事情是不值得
[01:17.489]为你唱这首歌没有什么风格
[01:21.998]它仅仅代表着我希望你快乐
[01:26.688]为你辗转反侧为你放弃世界有何不可
[01:32.328]夏末秋凉里带一点温热有换季的颜色
[01:41.040]
[01:57.908]天空好想下雨
[01:59.378]我好想住你隔壁
[02:02.296]傻站在你家楼下
[02:03.846]抬起头数乌云
[02:06.183]如果场景里出现一架钢琴
[02:08.875]我会唱歌给你听
[02:10.974]哪怕好多盆水往下淋
[02:15.325]夏天快要过去
[02:18.345]请你少买冰淇淋
[02:21.484]天凉就别穿短裙
[02:22.914]别再那么淘气
[02:25.185]如果有时不那么开心
[02:27.625]我愿意将格洛米借给你
[02:30.015]你其实明白我心意
[02:33.327]为你唱这首歌没有什么风格
[02:37.976]它仅仅代表着我想给你快乐
[02:42.835]为你解冻冰河为你做一只扑火的飞蛾
[02:48.406]没有什么事情是不值得
[02:52.416]为你唱这首歌没有什么风格
[02:57.077]它仅仅代表着我希望你快乐
[03:01.993]为你辗转反侧为你放弃世界有何不可
[03:07.494]夏末秋凉里带一点温热
[03:11.536]
[03:20.924]为你解冻冰河为你做一只扑火的飞蛾
[03:26.615]没有什么事情是不值得
[03:30.525]为你唱这首歌没有什么风格
[03:35.196]它仅仅代表着我希望你快乐
[03:39.946]为你辗转反侧为你放弃世界有何不可
[03:45.644]夏末秋凉里带一点温热有换季的颜色`,
      }]
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
  //引入歌曲信息从state里
  computed: {
    ...mapState(['playInfo'])
  },
  watch: {
    //做判断，如果歌曲不在播放列表就添加进去，在的话就else
    playInfo: {
      handler(newsong, oldsong) {
        let obj = this.audio.find(item => item.id === newsong.id)
        if (!obj) {
          // this.audio.push(newsong)
          this.audio.unshift(newsong)
          this.$refs.aplayer.switch(0)
          this.$refs.aplayer.play()
        } else {
          this.$message.warning('歌曲已经在播放列表了哦')
        }
      }
    }
  },
  mounted() {
    this.$refs.aplayer.play()
  }

}
</script>
<style>
</style>
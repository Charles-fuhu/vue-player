<template>
    <div class="mv-container">
        <div class="mv-wrap">
            <h3>MV详情</h3>
            <!-- mv -->
            <div class="video-wrap">
                <video controls :src="mvUrl" autoplay></video>
            </div>
        </div>
    </div>
</template>

<script>
import { mvUrl } from "../api/mvs";
export default {
    data() {
        return {
            // mv地址
            mvUrl: '',
            simiMV: [],
            // 热门评论
            hotComments: [],
            // 普通评论
            comments: [],
            // 分页相关数据
            // 每页数据
            limit: 20,
            // 页码
            page: 1,
            // 总条数
            total: 0,
            // mv的名字
            mvName: '',
            // 播放次数
            playCount: '',
            // 发布时间
            publishTime: '',
            // 描述
            desc: '',
            // 歌手名
            artistName: '',
            // 封面
            artistCover: ''
        };
    },
    methods: {
        //获取mv播放链接
        async getInfo() {
            const { id } = this.$route.query;
            const {data} = await mvUrl({ id })
            // console.log(data.data.url)
            this.mvUrl = data.data.url
        }

    },
    created(){
        this.getInfo()
    }

}
</script>

<style>
</style>
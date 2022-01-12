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
        };
    },
    methods: {
        //获取mv播放链接
        async getInfo() {
            const { id } = this.$route.query;
            const { data } = await mvUrl({ id })
            // console.log(data.data.url)
            this.mvUrl = data.data.url
        }
    },
    created() {
        this.getInfo()
    }
}
</script>
<style>
</style>
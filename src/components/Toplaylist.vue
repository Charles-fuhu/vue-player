<template>
    <div class="playlist-container">
        <div class="top-wrap">
            <div class="img-wrap">
                <img :src="coverImgUrl" alt />
            </div>
            <div class="info-wrap">
                <p class="title">{{ title }}</p>
                <div class="author-wrap">
                    <img class="avatar" :src="avatarUrl" alt />
                    <span class="name">{{ nickname }}</span>
                    <!-- <span class="time">{{ createTime }} 创建</span> -->
                </div>
                <div class="tag-wrap">
                    <span class="title">标签:</span>
                    <ul>
                        <li v-for="item in tags" :key="item">{{ item }}</li>
                    </ul>
                </div>
                <div class="desc-wrap">
                    <span class="title">简介:</span>
                    <span class="desc">{{ signature }}</span>
                </div>
            </div>
        </div>
        <el-tabs v-model="activeIndex">
            <el-tab-pane label="歌曲列表" name="1">
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
                            class="el-table__row"
                            v-for="item in tableData"
                            :key="item.id"
                            @click="getPlayerInfo(item)"
                        >
                            <td></td>
                            <td>
                                <div class="img-wrap">
                                    <img :src="item.al.picUrl" alt />
                                    <span class="iconfont icon-play"></span>
                                </div>
                            </td>
                            <td>
                                <div class="song-wrap">
                                    <div class="name-wrap">
                                        <span>{{ item.name }}</span>
                                        <!-- mv图标 -->
                                        <span
                                            v-if="item.mv != 0"
                                            @click="toMV(item.mv)"
                                            class="iconfont icon-mv"
                                        ></span>
                                    </div>
                                    <span>{{ item.subTitle }}</span>
                                </div>
                            </td>
                            <td>{{ item.ar[0].name }}</td>
                            <td>{{ item.al.name }}</td>
                            <td>{{ item.dt | formatDuration }}</td>
                        </tr>
                    </tbody>
                </table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { playlistDetail } from "../api/playlist"
import { mapActions } from "vuex";
export default {
    name: 'playlist',
    data() {
        return {
            activeIndex: '1',
            tableData: [],
            title: '',
            avatarUrl: '',
            coverImgUrl: '',
            signature: '',
            nickname: '',
            tags: [],
        };
    },
    methods: {
        ...mapActions(['getPlayerInfo']),
        toMV(id) {
            this.$router.push(`/mv?id=${id}`)
        },
        async getPlayList(id) {
            const { data: res } = await playlistDetail({ id: id })
            this.tableData = res.playlist.tracks;
            this.title = res.playlist.name;
            this.avatarUrl = res.playlist.creator.avatarUrl;
            this.coverImgUrl = res.playlist.coverImgUrl;
            this.signature = res.playlist.creator.signature;
            this.nickname = res.playlist.creator.nickname;
            this.tags = res.playlist.tags;
        },
    },
    mounted() {
        const { id } = this.$route.query
        this.getPlayList(id)
    },
  
}
</script>
<style>
</style>
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
//歌曲信息
const state = {
    // 播放列表
    playerList: [{
        id: 167876,
        url: require('../assets/有何不可.mp3'),
        name: '有何不可',
        artist: '许嵩',
        cover: 'https://p2.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg',
        lrc: 'Lyric',
    }]
}




export default new Vuex.Store({
    state,
    mutations,
    actions
})
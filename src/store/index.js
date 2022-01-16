import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
//歌曲信息
const state = {
    // 播放列表
    playInfo: {}
}




export default new Vuex.Store({
    state,
    mutations,
    actions
})
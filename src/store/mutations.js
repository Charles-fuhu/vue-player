import { RECEIVE_MUSIC_DATA } from "./mutations-type";


export default {
    //获取歌曲信息
    [RECEIVE_MUSIC_DATA](state,payload) {
        state.playInfo = payload
    }
}


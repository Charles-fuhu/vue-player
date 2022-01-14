import { RECEIVE_MUSIC_DATA } from "./mutations-type";


export default {
    //把获取到的歌曲信息保存起来
    [RECEIVE_MUSIC_DATA](state, obj) {
        // state.playerList[0] = obj
        // state.playerList.push(obj)
        //做判断，如果歌曲不存在，添加至列表，如果存在，执行else
        const have = state.playerList.find(song => song.id === obj.id)
        if (!have) {
            state.playerList.push(obj)
            
        } else {
            alert('歌曲已经在播放列表了哦')
        }
    }

}

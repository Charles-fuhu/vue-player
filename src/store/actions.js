import { RECEIVE_MUSIC_DATA } from "./mutations-type";

import { songUrl, getLyc, getSongDetail } from "../api/song";

export default {
    //通过ID获取歌曲的url和歌词
    //这里的payload是单首歌的参数
    //核心API
    async getPlayerInfo({ commit }, payload) {
        const { data: { data: song } } = await songUrl({ id: payload.id })
        const { data: res } = await getSongDetail({ ids: payload.id })
        const { data: lyric } = await getLyc(payload.id)
        const obj = {}
        obj.name = res.songs[0].name
        obj.artist = res.songs[0].ar[0].name
        obj.cover = res.songs[0].al.picUrl
        obj.id = payload.id
        obj.lrc = lyric.lrc.lyric
        obj.url = song[0].url
        commit(RECEIVE_MUSIC_DATA, obj)//调用mutation里的函数，把获取的数据添加到列表里
        
    }
}

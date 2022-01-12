import { request } from "./request";
export function getSongData({type}){
    return request({
        url:'/top/song',
        params:{
            type
        }
    })
}
export function getSongDetail ({ids}) {
   return request({
       url:'/song/detail',
       params:{
           ids
       }
   })
}
//获取歌词
export function getLyc(id) {
   return request({
       url:'/lyric',
       params:{
           id
       }
   })
}
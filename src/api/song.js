import { request } from "./request";

export function getSongData({type}){
    return request({
        url:'/top/song',
        params:{
            type
        }
    })
}
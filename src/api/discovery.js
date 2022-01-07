import { request } from "./request";
//  获取轮播图
export function getBanner() {
    return request({
        url: '/banner'
    })
}
// 获取歌曲列表
export function getSongList(config) {
    return request({
        url: '/personalized',
        params: {
            limit: config
        }
    })
}
// 获取推荐音乐
export function getNewSong(config) {
    return request({
        url: '/personalized/newsong',
        params: {
            limit: config
        }
    })

}
// 获取歌曲url
export function songUrl({ id }) {
    return request({
        url: '/song/url',
        params: {
            id
        }
    })

}
// 获取推荐MV
export function newMV(config) {
    return request({
        url: '/personalized/mv',
        params: {
            limit: config
        }
    })
}

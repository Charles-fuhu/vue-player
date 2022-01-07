import { request } from "./request";
// 精品歌单
export function highquality({ cat }) {
    return request({
        url: '/top/playlist/highquality',
        method: 'get',
        params: {
            limit: 10,
            cat
        }
    });
}
// 精选歌单
export function topList() {
    return request({
      url: '/top/playlist',
      method: 'get',
      params: {
        limit: 10,
        
      }
    });
  }
  
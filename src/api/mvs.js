import { request } from "./request";
//获取mv列表
export function getMvs({ area, order, limit, offset, type }) {
    return request({
        url: 'mv/all',
        params: {
            area,
            order,
            limit,
            offset,
            type
        }
    })
}
//获取mv播放链接
export function mvUrl({id}){
    return request({
        url:'mv/url',
        params:{
            id
        }
    })
}
//获取mv详情
export function mvDetail({mvid}) {
    return request({
      url: '/mv/detail',
      method: 'get',
      params:{
        mvid
      }
    });
  }
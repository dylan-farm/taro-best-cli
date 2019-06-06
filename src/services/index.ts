import {WxRequest} from './request/WxRequest'

// 获取推荐歌单
export function getRecommendList() {
  return WxRequest.get({
    url: '/personalized'
  })
}
// 获取歌曲信息
export function getSongInfo(data) {
  return WxRequest.get({
    url: '/song/detail',
    data: data
  })
}
// 获取歌曲链接信息
export function getMusicUrl(data) {
  return WxRequest.get({
    url: '/song/url',
    data: data
  })
}
// 获取歌词
export function getLyric(data) {
  return WxRequest.get({
    url: '/lyric',
    data: data
  })
}
// 获取歌单列表
export function getPlayList(data) {
  return WxRequest.get({
    url: '/playlist/detail',
    data: data
  })
}
// 获取最新单曲
export function getNewSong(data) {
  return WxRequest.get({
    url: '/personalized/newsong',
    data: data
  })
}
// 获取专辑列表
export function getAlbumList(data) {
  return WxRequest.get({
    url: '/top/album',
    data: data
  })
}
// 获取专辑详情
export function getAlbumDetail(data) {
  return WxRequest.get({
    url: '/album',
    data: data
  })
}


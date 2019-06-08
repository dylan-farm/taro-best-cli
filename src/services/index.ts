import request from "./request/api";

// 获取推荐歌单
export function getRecommendList() {
  return request.get({
    url: "/books"
  });
}
// 获取歌曲信息
export function getSongInfo(data) {
  return request.get({
    url: "/song/detail",
    data: data
  });
}
// 获取歌曲链接信息
export function getMusicUrl(data) {
  return request.get({
    url: "/song/url",
    data: data
  });
}
// 获取歌词
export function getLyric(data) {
  return request.get({
    url: "/lyric",
    data: data
  });
}
// 获取歌单列表
export function getPlayList(data) {
  return request.get({
    url: "/playlist/detail",
    data: data
  });
}
// 获取最新单曲
export function getNewSong(data) {
  return request.get({
    url: "/personalized/newsong",
    data: data
  });
}
// 获取专辑列表
export function getAlbumList(data) {
  return request.get({
    url: "/top/album",
    data: data
  });
}
// 获取专辑详情
export function getAlbumDetail(data) {
  return request.get({
    url: "/album",
    data: data
  });
}

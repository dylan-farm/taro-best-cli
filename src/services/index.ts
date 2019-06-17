import request from "@/utils/request/api";

// getBooks
export function getBooks() {
  return request.get({
    url: "/books"
  });
}
// getBooks
export function getHotBooks() {
  return request.get({
    url: "/books/hot"
  });
}
// getBooks
export function getRecommendBooks() {
  return request.get({
    url: "/books/recommend"
  });
}
// getBooks
export function getNewBooks() {
  return request.get({
    url: "/books/new"
  });
}

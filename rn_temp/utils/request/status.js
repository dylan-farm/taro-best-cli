// interface HTTP_STATUS_ITEM {
//   code: number | string;
//   message: string;
// }
export const HTTP_STATUS = {
  CLIENT_ERROR: {
    code: 400,
    message: "发出的请求有错误，服务器没有进行新建或修改数据的操作。"
  },
  AUTHENTICATE: {
    code: 401,
    message: "用户没有权限（令牌、用户名、密码错误）。"
  },
  FORBIDDEN: {
    code: 403,
    message: "用户得到授权，但是访问是被禁止的。"
  },
  NOT_FOUND: {
    code: 404,
    message: "发出的请求针对的是不存在的记录，服务器没有进行操作。"
  },
  SERVER_ERROR: {
    code: 500,
    message: "服务器发生错误，请检查服务器。"
  },
  BAD_GATEWAY: {
    code: 502,
    message: "网关错误。"
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    message: "服务不可用，服务器暂时过载或维护。"
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    message: "网关超时。"
  }
};
// export const HTTP_ERROR = {
//   "400": "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
//   "401": "用户没有权限（令牌、用户名、密码错误）。",
//   "403": "用户得到授权，但是访问是被禁止的。",
//   "404": "发出的请求针对的是不存在的记录，服务器没有进行操作。",
//   "406": "请求的格式不可得。",
//   "410": "请求的资源被永久删除，且不会再得到的。",
//   "422": "当创建一个对象时，发生一个验证错误。",
//   "500": "服务器发生错误，请检查服务器。",
//   "502": "网关错误。",
//   "503": "服务不可用，服务器暂时过载或维护。",
//   "504": "网关超时。"
// };
// promise status
// export const SUCCESS = { success: "success" };
// export const FAIL = { fail: "fail" };
// export const COMPLETE = { complete: "complete" };
// export const PROMISE_STATUS = {
//   success: "success",
//   fail: "fail",
//   complete: "complete"
// };
// export const RESULT_STATUS = {
//   SUCCESS: 0,
//   SIGNATURE_FAILED: 1000 // 签名失败
// };
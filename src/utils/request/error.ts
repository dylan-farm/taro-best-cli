import { getCurrentPageUrl, formatTime } from "../../utils/common";
import Taro from "@tarojs/taro";

// var fundebug = require("../libs/fundebug.0.8.2.min.js");
/**
 * @param {string} name 错误名字
 * @param {string} action 错误动作描述
 * @param {any} info 错误信息，通常是 fail 返回的
 */
export const logError = (
  name: string = "errorName",
  action: string = "errorAction",
  info?: any
) => {
  if (!info) {
    info = "empty";
  }
  getCurrentPageUrl();
  let deviceInfo: any = {};
  let device: string = "";
  try {
    deviceInfo = Taro.getSystemInfoSync();
    device = JSON.stringify(deviceInfo);
  } catch (e) {
    throwError(`support getSystemInfoSync api;`, e);
  }
  throwError(`${name}-${action};`, info);
  // console.error(time, name, action, info, device);
  // 上报异常工具调用
  // let time = formatTime(new Date());
  // fundebug.notifyError(info, { name, action, device, time })
  if (typeof info === "object") {
    info = JSON.stringify(info);
  }
};

/**
 * 请求错误处理
 * @param errMsg
 * @param data
 * @param reject
 */
export const throwError = (
  errMsg: string = ` 异常错误`,
  data: object = {},
  reject?: any
): void => {
  let error: any = new Error(errMsg);
  error.data = data;
  reject && reject(error);
  throw error;
};

import Taro from '@tarojs/taro-rn';
import React from 'react';

import { HTTP_STATUS } from "./status";
import { logError, throwError } from "./error";
import { getHost } from "./api.config";
const env = Taro.getEnv();
const HOST = getHost(env);
let Request = class Request {
  constructor() {
    this.get = ({ url, data }) => this.request({ url, data, method: "GET" });

    this.post = ({ url, data }) => this.request({ url, data, method: "POST" });

    this.env = env;
    this.HOST = HOST;
    this.defaultOptions = {
      url: "",
      data: {},
      isShowLoading: false,
      loadingText: "正在加载",
      method: "GET",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        token: ""
      }
    };
  }
  /**
   * 检查http状态值
   * @param response
   * @returns {*}
   */
  checkHttpStatus(response) {
    // console.log("response", response);
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return response.data;
    }
    const { statusCode, errMsg } = response;
    const { code, message } = Object.values(HTTP_STATUS).filter(v => v.code == statusCode)[0] || {
      code: statusCode,
      message: `ERROR CODE: ${statusCode}`
    };
    logError("api", message, errMsg);
  }
  /**
   * 检查返回值是否正常
   * @param data
   * @returns {*}
   */
  checkSuccess(data, resolve) {
    // console.log("data", data);
    if (data instanceof ArrayBuffer && typeof data === "string") {
      return data;
    }
    const { code, message } = data;
    if (typeof code === "number" && code === 200) {
      return resolve(data);
    }
    logError("api", "请求异常", message);
  }
  /**
   * 检查环境 配置相应的 fetch 工具
   * TODO wx Taro.request || h5 fetch
   * @param options
   * @returns {Promise}
   */
  request(options) {
    const { url, header: optionsHeader } = options;
    const { header: defaultOptionsHeader } = this.defaultOptions;
    const token = "";
    const newOptions = {
      ...this.defaultOptions,
      ...options,
      url: `${this.HOST}${url}`,
      header: {
        ...optionsHeader,
        ...defaultOptionsHeader,
        token
      }
    };
    return new Promise((resolve, reject) => {
      Taro.request(newOptions).then(this.checkHttpStatus).then(res => this.checkSuccess(res, resolve)).catch(error => throwError(error.errMsg, reject));
    });
  }
};
// export const WxRequest = new Request("weapp");
// export const H5Request = new Request("h5");
// export const AlipayRequest = new Request("alipay");

export default new Request();
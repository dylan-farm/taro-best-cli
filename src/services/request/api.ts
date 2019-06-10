import Taro from "@tarojs/taro";
import { HTTP_STATUS } from "./status";
import { logError, throwError } from "./error";
import {getHost} from "./api.config";

const env = Taro.getEnv()
const HOST = getHost(env)
console.log(env,HOST)
class Request {
  private env = env;
  private HOST = HOST;
  private defaultOptions: API.RequrestParams = {
    url: "",
    data: {},
    isShowLoading: false,
    loadingText: "正在加载",
    method: "GET",
    header: { "content-type": "application/x-www-form-urlencoded", token: "" }
  };
  /**
   * 检查http状态值
   * @param response
   * @returns {*}
   */
  private checkHttpStatus(response: API.Response) {
    console.log("response", response);
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return response.data;
    }
    const { statusCode, errMsg } = response;
    const { code, message } = Object.values(HTTP_STATUS).filter(
      v => v.code == statusCode
    )[0] || {
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
  private checkSuccess(data: any, resolve) {
    console.log("data", data);
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
  private getRequestFuc = options =>
    ({
      weapp: new Promise((resolve, reject) => {
        Taro.request(options)
          .then(this.checkHttpStatus)
          .then(res => this.checkSuccess(res, resolve))
          .catch(error => throwError(error.errMsg, reject));
      }),
      h5: () => {},
      alipay: () => {}
    }[this.env]);
  public request(options: API.RequrestParams) {
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
    console.log(newOptions);
    return this.getRequestFuc(newOptions);
  }

  public get = ({ url, data }: API.RequrestParams) =>
    this.request({ url, data, method: "GET" });
  public post = ({ url, data }: API.RequrestParams) =>
    this.request({ url, data, method: "POST" });
}

// export const WxRequest = new Request("weapp");

// export const H5Request = new Request("h5");

// export const AlipayRequest = new Request("alipay");

export default new Request()

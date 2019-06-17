export const getHost = (env: string): string =>
  (process.env.NODE_ENV === "development"
    ? {
        WEAPP: "http://localhost:3000",
        WEB: window && window.location.origin + "/proxy",
        ALIPAY: "ALIPAY",
        QQ: "QQ",
        RN: "RN",
        SWAN: "SWAN",
        TT: "TT"
      }
    : {})[env];

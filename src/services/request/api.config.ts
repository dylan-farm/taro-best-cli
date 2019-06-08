export const getHost = env => ({
  WEAPP: "http://localhost:3000",
  WEB: window&&window.location.origin,
  ALIPAY: "ALIPAY",
  QQ: "QQ",
  RN: "RN",
  SWAN: "SWAN",
  TT: "TT"
}[env]);

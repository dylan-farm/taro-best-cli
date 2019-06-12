"use strict";

// 获取本地ip
function getIP() {
  var ifaces = require("os").networkInterfaces();
  var ip = "127.0.0.1";
  for (var dev in ifaces) {
    if (ifaces.hasOwnProperty(dev)) {
      ifaces[dev].forEach(function (details) {
        if (ip === "127.0.0.1" && details.family === "IPv4") {
          ip = details.address;
        }
      });
    }
  }
  return ip;
}

module.exports = {
  host: getIP()
};
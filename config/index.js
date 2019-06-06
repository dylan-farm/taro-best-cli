"use strict";
const path = require('path')
var config = {
  projectName: "taro-music",
  date: "2018-11-8",
  designWidth: 750,
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: {
    babel: {
      sourceMap: true,
      presets: ["env"],
      plugins: [
        "transform-class-properties",
        "transform-decorators-legacy",
        "transform-object-rest-spread"
      ]
    }
  },
  defineConstants: {},
  weapp: {},
  alias: {
    "@components": path.resolve(__dirname, "..", "src/components"),
    "@assets": path.resolve(__dirname, "..", "src/assets"),
    "@utils": path.resolve(__dirname, "..", "src/utils"),
    "@services": path.resolve(__dirname, "..", "src/services"),
    "@store": path.resolve(__dirname, "..", "src/store"),
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev.js"));
  }
  return merge({}, config, require("./prod.js"));
};

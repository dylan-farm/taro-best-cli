"use strict";
const path = require("path");

// NOTE 在 sass 中通过别名（@ 或 ~）引用需要指定路径
const sassImporter = function(url) {
  if (url[0] === "~" && url[1] !== "/") {
    return {
      file: path.resolve(__dirname, "..", "node_modules", url.substr(1))
    };
  }

  const reg = /^@styles\/(.*)/;
  return {
    file: reg.test(url)
      ? path.resolve(__dirname, "..", "src/styles", url.match(reg)[1])
      : url
  };
};

var config = {
  projectName: "taro-best-cli",
  date: "2019-06-08",
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
    },
    sass: {
      importer: sassImporter
    }
  },
  defineConstants: {},
  // 编译 weapp 源码 wenpack 配置
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: ["last 3 versions", "Android >= 4.1", "ios >= 8"]
          }
        },
        pxtransform: {
          enable: true,
          config: {}
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
      }
    }
  },
  alias: {
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/assets": path.resolve(__dirname, "..", "src/assets"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/services": path.resolve(__dirname, "..", "src/services"),
    "@/typings": path.resolve(__dirname, "..", "src/typings"),
    "@/styles": path.resolve(__dirname, "..", "src/styles"),
  },
  // 编译 h5 源码 wenpack 配置
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    output: {
      filename: "js/[name].[hash:8].js",
      chunkFilename: "js/[name].[chunkhash:8].js"
    },
    devServer: {
      clientLogLevel: "warning",
      historyApiFallback: true,
      hot: true,
      compress: true,
      port: 8080,
      proxy: {
        "/proxy": {
          target: "http://localhost:3000",
          changeOrigin: true,
          pathRewrite: {
            "^/proxy": ""
          }
        }
      }
    },
    enableDll: true,
    dllEntry: {
      lib: ["nervjs", "@tarojs/taro-h5", "@tarojs/router", "@tarojs/components"]
    },
    router: {
      mode: "browser"
    },
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    },
    sassLoaderOption: {
      importer: sassImporter
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev.js"));
  }
  return merge({}, config, require("./prod.js"));
};

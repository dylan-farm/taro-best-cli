import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Button, Image } from "@tarojs/components-rn";
import { TaroCanvasDrawer } from "taro-plugin-canvas"; // 拷贝文件到component的引入方式
import ShareImageStyleSheet from "./ShareImage_styles";
import shareConfig from "./shareConfig";
var _styleSheet = ShareImageStyleSheet;
let ShareImage = class ShareImage extends Component {
  constructor(props) {
    super(props);
    // 调用绘画 => canvasStatus 置为true、同时设置config

    this.canvasDrawFunc = (config = this.state.rssConfig) => {
      this.setState({
        canvasStatus: true,
        config: config
      });
      Taro.showLoading({
        title: "绘制中..."
      });
    };

    this.onCreateSuccess = result => {
      const { tempFilePath, errMsg } = result;
      Taro.hideLoading();
      if (errMsg === "canvasToTempFilePath:ok") {
        this.setState({
          shareImage: tempFilePath,
          // 重置 TaroCanvasDrawer 状态，方便下一次调用
          canvasStatus: false,
          config: null
        });
      } else {
        // 重置 TaroCanvasDrawer 状态，方便下一次调用
        this.setState({
          canvasStatus: false,
          config: null
        });
        Taro.showToast({ icon: "none", title: errMsg || "出现错误" });
        console.log(errMsg);
      }
      // 预览
      // Taro.previewImage({
      //   current: tempFilePath,
      //   urls: [tempFilePath]
      // })
    };

    this.onCreateFail = error => {
      Taro.hideLoading();
      // 重置 TaroCanvasDrawer 状态，方便下一次调用
      this.setState({
        canvasStatus: false,
        config: null
      });
      console.log(error);
    };

    this.saveToAlbum = () => {
      const res = Taro.saveImageToPhotosAlbum({
        filePath: this.state.shareImage
      });
      if (res.errMsg === "saveImageToPhotosAlbum:ok") {
        Taro.showToast({
          title: "保存图片成功",
          icon: "success",
          duration: 2000
        });
      }
    };

    this.state = {
      // 绘图配置文件
      config: null,
      // 绘制的图片
      shareImage: null,
      // TaroCanvasDrawer 组件状态
      canvasStatus: false,
      rssConfig: shareConfig
    };
  }
  render() {
    return <View style={_styleSheet["index"]}>
        <View>
          <View style={_styleSheet["flex-row"]}>
            <Button onClick={this.canvasDrawFunc.bind(this, this.state.rssConfig)}>
              绘制
            </Button>
            <Button onClick={this.saveToAlbum}>保存到相册</Button>
          </View>
        </View>
        <View style={_styleSheet["shareImage-cont"]}>
          <Image src={this.state.shareImage} mode="widthFix" lazy-load style={_styleSheet["shareImage"]} />
          {this.state.canvasStatus && <TaroCanvasDrawer config={this.state.config} // 绘制配置
        onCreateSuccess={this.onCreateSuccess} // 绘制成功回调
        onCreateFail={this.onCreateFail} // 绘制失败回调
        />}
        </View>
      </View>;
  }
};

export default ShareImage;
import Taro, { Component } from "@tarojs/taro";
import { View, Button, Image } from "@tarojs/components";
import { TaroCanvasDrawer } from "taro-plugin-canvas"; // 拷贝文件到component的引入方式
import "./ShareImage.scss";
import shareConfig from "./shareConfig";

interface CenterStates {
  config: any;
  shareImage: any;
  canvasStatus: any;
  rssConfig: any;
}

class ShareImage extends Component<{}, CenterStates> {
  constructor(props) {
    super(props);
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

  // 调用绘画 => canvasStatus 置为true、同时设置config
  canvasDrawFunc = (config = this.state.rssConfig) => {
    this.setState({
      canvasStatus: true,
      config: config
    });
    Taro.showLoading({
      title: "绘制中..."
    });
  };

  // 绘制成功回调函数 （必须实现）=> 接收绘制结果、重置 TaroCanvasDrawer 状态
  onCreateSuccess = result => {
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

  // 绘制失败回调函数 （必须实现）=> 接收绘制错误信息、重置 TaroCanvasDrawer 状态
  onCreateFail = error => {
    Taro.hideLoading();
    // 重置 TaroCanvasDrawer 状态，方便下一次调用
    this.setState({
      canvasStatus: false,
      config: null
    });
    console.log(error);
  };

  // 保存图片至本地
  saveToAlbum = () => {
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

  render() {
    return (
      <View className="index">
        <View>
          <View className="flex-row">
            <Button
              onClick={this.canvasDrawFunc.bind(this, this.state.rssConfig)}
            >
              绘制
            </Button>
            <Button onClick={this.saveToAlbum}>保存到相册</Button>
          </View>
        </View>
        <View className="shareImage-cont">
          <Image
            className="shareImage"
            src={this.state.shareImage}
            mode="widthFix"
            lazy-load
          />
          {// 由于部分限制，目前组件通过状态的方式来动态加载
          this.state.canvasStatus && (
            <TaroCanvasDrawer
              config={this.state.config} // 绘制配置
              onCreateSuccess={this.onCreateSuccess} // 绘制成功回调
              onCreateFail={this.onCreateFail} // 绘制失败回调
            />
          )}
        </View>
      </View>
    );
  }
}

export default ShareImage;

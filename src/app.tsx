import "@tarojs/async-await";
import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index/index";
import { setGlobalData } from "./utils";

import "./app.scss";
import "./assets/icon.css";
import store from "./store/index";
// const backgroundAudioManager = Taro.getBackgroundAudioManager();

class App extends Component {
  config: Config = {
    pages: ["pages/index/index", "pages/center/center"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "Taro-Cli",
      navigationBarTextStyle: "black",
      enablePullDownRefresh: true
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#626567',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'assets/image/logo.png',
        },
        {
          pagePath: "pages/center/center",
          text: '中心',
          iconPath: 'assets/image/logo.png',
        },
      ]
    },
    
  };

  componentDidMount() {
    // setGlobalData("backgroundAudioManager", backgroundAudioManager);
  }

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));

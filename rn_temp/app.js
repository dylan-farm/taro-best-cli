var _class, _temp;

import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import assetsImageTabMeFPng from '././assets/image/tab_me_f.png';
import assetsImageTabMePng from '././assets/image/tab_me.png';
import assetsImageTabHomeFPng from '././assets/image/tab_home_f.png';
import assetsImageTabHomePng from '././assets/image/tab_home.png';
import pagesCenterCenter from './pages/center/center';
import pagesIndexIndex from './pages/index/index';
import Taro from '@tarojs/taro-rn';
import "@tarojs/async-await";
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Provider } from "@tarojs/taro-redux-rn";

import appStyleSheet from "./app_styles";

import store from "./store/index";
// const backgroundAudioManager = Taro.getBackgroundAudioManager();
var _styleSheet = appStyleSheet;
let App = (_temp = _class = class App extends Component {
  constructor() {
    super(...arguments);
    Taro._$app = this;
  }
  componentDidMount() {
    // setGlobalData("backgroundAudioManager", backgroundAudioManager);

    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentCatchError() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
                  
                <TCRNProvider>
                  <RootStack />
                </TCRNProvider>
                </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

}, _class.config = {
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
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: assetsImageTabHomePng,
      selectedIconPath: assetsImageTabHomeFPng
    }, {
      pagePath: "pages/center/center",
      text: '我的 ',
      iconPath: assetsImageTabMePng,
      selectedIconPath: assetsImageTabMeFPng
    }]
  }
}, _temp);
const RootStack = TaroRouter.initRouter([['pages/index/index', pagesIndexIndex], ['pages/center/center', pagesCenterCenter]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750
});
export default App;
var _class, _temp;

import Taro from '@tarojs/taro-rn';
import * as tslib_1 from "tslib";
import React from 'react';
import { Component } from "@tarojs/taro-rn";
// import { View, Text, Button, Image } from "@tarojs/components";
import { connect } from "@tarojs/taro-redux-rn";
import action from "../../utils/action";
import ShareImage from "./components/ShareImage/ShareImage";
import DefaultRender from "./components/DefaultRender/DefaultRender";
import centerStyleSheet from "./center_styles";
import { View } from "@tarojs/components-rn";
var _styleSheet = centerStyleSheet;
const env = Taro.getEnv();
let Center = (_temp = _class = class Center extends Component {
  constructor() {
    super(...arguments);

    this.state = {};
  }
  componentDidShow() {
    this.props.dispatch(action("center/getBooks"));
  }
  navigateTo(url) {
    Taro.navigateTo({ url: url });
  }
  render() {
    return <View>{env == "WEAPP" ? <ShareImage /> : <DefaultRender />}</View>;
  }
}, _class.config = {
  navigationBarTitleText: "个人中心"
}, _temp);
Center = tslib_1.__decorate([connect(({ center }) => ({
  center
}))], Center);
export default Center;
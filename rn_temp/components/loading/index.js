import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Image } from "@tarojs/components-rn";
import loading from './assets/loading.gif';
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let Loading = class Loading extends Component {
  render() {
    return <View style={_styleSheet["comp-loading"]}>
        <Image src={loading} style={_styleSheet["comp-loading__img"]} />
      </View>;
  }
};
export { Loading as default };
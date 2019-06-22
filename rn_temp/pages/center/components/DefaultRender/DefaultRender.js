import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import DefaultRenderStyleSheet from "./DefaultRender_styles";
var _styleSheet = DefaultRenderStyleSheet;
let DefaultRender = class DefaultRender extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return <View style={_styleSheet["center-wrapper"]}>
        <Text>Hello, World</Text>
      </View>;
  }
};

export default DefaultRender;
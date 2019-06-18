import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./DefaultRender.scss";

class DefaultRender extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <View className="center-wrapper">
        <Text>Hello, World</Text>
      </View>
    );
  }
}

export default DefaultRender;

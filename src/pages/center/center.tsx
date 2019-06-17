import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import action from "@/utils/action";

import "./center.scss";

interface CenterProps {
  center: any;
  dispatch: any;
}

@connect(({ center }) => ({
  center
}))
class Center extends Component<CenterProps, {}> {
  config = {
    navigationBarTitleText: "个人中心"
  };
  constructor() {
    super(...arguments);
  }

  componentDidShow() {
    this.props.dispatch(action("center/getBooks"));
    console.log(this.props);
  }
  navigateTo(url: string) {
    Taro.navigateTo({ url: url });
  }

  render() {
    return (
      <View className="center-wrapper">
        <Text>Hello, World</Text>
      </View>
    );
  }
}

export default Center;

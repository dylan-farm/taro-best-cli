import Taro, { Component } from "@tarojs/taro";
// import { View, Text, Button, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import action from "@/utils/action";
import ShareImage from "./components/ShareImage/ShareImage";
import DefaultRender from "./components/DefaultRender/DefaultRender";
import "./center.scss";
import { View } from "@tarojs/components";

interface CenterProps {
  center: any;
  dispatch: any;
}
const env = Taro.getEnv();
@connect(({ center }) => ({
  center
}))
class Center extends Component<CenterProps, {}> {
  config = {
    navigationBarTitleText: "个人中心"
  };
  constructor() {
    super(...arguments);
    this.state = {};
  }
  componentDidShow() {
    this.props.dispatch(action("center/getBooks"));
  }
  navigateTo(url: string) {
    Taro.navigateTo({ url: url });
  }
  render() {
    return <View>{env == "WEAPP" ? <ShareImage /> : <DefaultRender />}</View>;
  }
}

export default Center;

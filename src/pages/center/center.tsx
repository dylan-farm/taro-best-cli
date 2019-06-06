import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { getCacheData } from "../../utils/index";
import Loading from "../../components/loading";

import "./center.scss";

interface CenterProps {
  main: any
}

const mapStateToProps = ({ main }) => ({
  main
});
const mapDispatchToProps = {};

@connect(mapStateToProps, mapDispatchToProps)
class Center extends Component<CenterProps, {}> {
  static options = {
    addGlobalClass: true
  };
  constructor() {
    super(...arguments);
  }

  navigateTo(url: string) {
    Taro.navigateTo({ url: url });
  }

  render() {
    return <View className="recommend-wrapper">Center</View>;
  }
}

export default Center;

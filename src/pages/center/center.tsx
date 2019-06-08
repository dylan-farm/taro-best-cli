import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import action from "../../utils/action";
import Loading from "../../components/loading";

import "./center.scss";

interface CenterProps {
  main: any;
  dispatch: any;
}

const mapStateToProps = ({ main }) => ({
  main
});
const mapDispatchToProps = (dispatch)=>({
  dispatch
});

@connect(
  mapStateToProps,
)
class Center extends Component<CenterProps, {}> {
  static options = {
    addGlobalClass: true
  };
  constructor() {
    super(...arguments);
  }

  componentDidShow() {
    this.props.dispatch(action("main/getRecommendList"));
    console.log(this.props);
  }
  navigateTo(url: string) {
    Taro.navigateTo({ url: url });
  }

  render() {
    return <View className="recommend-wrapper">Center</View>;
  }
}

export default Center;

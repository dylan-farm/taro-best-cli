import Taro, { Component } from "@tarojs/taro";
import { View, Text, Navigator } from "@tarojs/components";
import "./index.scss";

interface PanelProps {
  url: string;
  title: string;
  className: string;
}
export default class Panel extends Component<PanelProps, {}> {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    url: "",
    title: "",
    className: ""
  };

  componentWillMount() {}

  render() {
    const rootCls = `my-panel ${this.props.className}`;
    return (
      <View className={rootCls}>
        <Navigator url={this.props.url} hoverClass="None">
          <View className="my-panel-header at-row at-row__align--center">
            <View className="at-col">{this.props.title}</View>
            <Text className="my-panel-header__arrow at-icon at-icon-chevron-right at-col" />
          </View>
        </Navigator>
        <View className="my-panel-body">{this.props.children}</View>
      </View>
    );
  }
}

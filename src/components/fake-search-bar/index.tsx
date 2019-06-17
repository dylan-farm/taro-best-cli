import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./index.scss";

interface FakeSearchBarProps {
  placeholder?: String;
  onClick?: any;
}
export default class FakeSearchBar extends Component<FakeSearchBarProps, {}> {
  static options = {
    addGlobalClass: true
  };

  static defaultProps = {
    placeholder: "搜索",
    onClick: () => {}
  };

  render() {
    return (
      <View className="my-fake-search-bar" onClick={this.props.onClick}>
        <View className="my-fake-search-bar__placeholder-wrap">
          <Text className="at-icon at-icon-search" />
          <Text className="my-fake-search-bar__placeholder">
            {this.props.placeholder}
          </Text>
        </View>
      </View>
    );
  }
}

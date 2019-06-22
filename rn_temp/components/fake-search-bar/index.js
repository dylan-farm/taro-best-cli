import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let FakeSearchBar = class FakeSearchBar extends Component {
  render() {
    return <View onClick={this.props.onClick} style={_styleSheet["my-fake-search-bar"]}>
        <View style={_styleSheet["my-fake-search-bar__placeholder-wrap"]}>
          <Text style={[_styleSheet["at-icon"], _styleSheet["at-icon-search"]]} />
          <Text style={_styleSheet["my-fake-search-bar__placeholder"]}>
            {this.props.placeholder}
          </Text>
        </View>
      </View>;
  }
};
export { FakeSearchBar as default };

FakeSearchBar.options = {
  addGlobalClass: true
};
FakeSearchBar.defaultProps = {
  placeholder: "搜索",
  onClick: () => {}
};
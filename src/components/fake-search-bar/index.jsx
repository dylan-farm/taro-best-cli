import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./index.scss";

export default class FakeSearchBar extends Component {
  static options = {
    addGlobalClass: true
  };

  // static defaultProps = {
  //   placeholder: "搜索",
  //   onClick: () => { }
  // };

  // static propTypes = {
  //   placeholder: PropTypes.string,
  //   onClick: PropTypes.func
  // };

  render() {
    return (
      <View className='my-fake-search-bar' onClick={this.props.onClick}>
        <View className='my-fake-search-bar__placeholder-wrap'>
          <Text className='at-icon at-icon-search' />
          <Text className='my-fake-search-bar__placeholder'>
            {this.props.placeholder}
          </Text>
        </View>
      </View>
    );
  }
}

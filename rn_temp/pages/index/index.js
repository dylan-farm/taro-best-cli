var _class, _temp;

import * as tslib_1 from "tslib";
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import Action from "../../utils/action";
import indexStyleSheet from "./index_styles";
import { connect } from "@tarojs/taro-redux-rn";
import Panel from "../../components/panel/index";
import HorizonList from "../../components/horizon-list/index";
import FakeSearchBar from "../../components/fake-search-bar/index";
var _styleSheet = indexStyleSheet;
;
let Index = (_temp = _class = class Index extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {
    this.init();
  }
  init() {
    const { dispatch } = this.props;
    dispatch(Action("home/getNewBooks"));
    dispatch(Action("home/getHotBooks"));
    dispatch(Action("home/getRecommendBooks"));
  }
  render() {
    return <View style={[_styleSheet["play-wrapper"], _styleSheet["wrapper"]]}>
        <FakeSearchBar />
        <Panel title="新书速递" style={_styleSheet["panel--first"]}>
          <HorizonList data={this.props.newBooks} />
        </Panel>
        <Panel title="近期热门" style={_styleSheet["margin-top-lg"]}>
          <HorizonList data={this.props.hotBooks} />
        </Panel>
        <Panel title="为你推荐" style={_styleSheet["margin-top-lg"]}>
          <HorizonList data={this.props.recommendBooks} />
        </Panel>
      </View>;
  }
}, _class.config = {
  navigationBarTitleText: "首页"
}, _temp);
Index.defaultProps = {
  newBooks: [],
  hotBooks: [],
  recommendBooks: [],
  dispatch: () => {}
};
Index = tslib_1.__decorate([connect(({ home }) => ({
  ...home
}))], Index);
export default Index;
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Navigator } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;

function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();

      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }

  return className.join(' ').trim();
}

function _getStyle(classNameExpression) {
  var className = _getClassName(classNameExpression);

  var classNameArr = className.split(/\s+/);
  var style = [];

  if (classNameArr.length === 1) {
    style.push(_styleSheet[classNameArr[0].trim()]);
  } else {
    classNameArr.forEach(function (cls) {
      style.push(_styleSheet[cls.trim()]);
    });
  }

  return style;
}

let Panel = class Panel extends Component {
  componentWillMount() {}
  render() {
    const rootCls = `my-panel ${this.props.className}`;
    return <View style={_getStyle(rootCls)}>
        <Navigator url={this.props.url} hoverClass="None">
          <View style={[_styleSheet["my-panel-header"], _styleSheet["at-row"], _styleSheet["at-row__align--center"]]}>
            <View style={_styleSheet["at-col"]}>{this.props.title}</View>
            <Text style={[_styleSheet["my-panel-header__arrow"], _styleSheet["at-icon"], _styleSheet["at-icon-chevron-right"], _styleSheet["at-col"]]} />
          </View>
        </Navigator>
        <View style={_styleSheet["my-panel-body"]}>{this.props.children}</View>
      </View>;
  }
};
export { Panel as default };

Panel.options = {
  addGlobalClass: true
};
Panel.defaultProps = {
  url: "",
  title: "",
  className: ""
};
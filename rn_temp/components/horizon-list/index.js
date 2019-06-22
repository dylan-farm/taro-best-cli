import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, ScrollView, Navigator, Image } from "@tarojs/components-rn";
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

;
let HorizonList = class HorizonList extends Component {
  render() {
    const { isBook, data, sideSpace } = this.props;
    // 以rpx为单位计算图片宽高
    let imgWidth, imgHeight;
    imgWidth = (702 - sideSpace * 2) / 3; // 24是两张图片之间的距离
    imgHeight = imgWidth * 300 / 218; // 图片宽高比为218/300
    return <ScrollView scrollX style={_styleSheet["my-horizon-list-container"]}>
        <View style={_styleSheet["my-horizon-list"]}>
          {data.map(item => {
          return <Navigator key={item.id}
          // url={`${url}?id=${item.id}`}
          hoverClass="None" style={[_styleSheet["my-horizon-list-item"], { width: Taro.pxTransform(imgWidth) }]}>
                <Image style={[_getStyle(isBook ? "my-horizon-list-item__book" : "my-horizon-list-item__booklist"), {
              width: Taro.pxTransform(imgWidth),
              height: isBook ? Taro.pxTransform(imgHeight) : Taro.pxTransform(imgWidth)
            }]} src={item.image} mode="aspectFill" />
                <View style={_styleSheet["my-horizon-list-item__title"]}>
                  {item.title}
                </View>
                {isBook && <View style={_styleSheet["my-horizon-list-item__author"]}>
                    {item.author}
                  </View>}
              </Navigator>;
        })}
        </View>
      </ScrollView>;
  }
};
export { HorizonList as default };

HorizonList.options = {
  addGlobalClass: true
};
HorizonList.defaultProps = {
  isBook: true,
  data: [],
  sideSpace: 24
};
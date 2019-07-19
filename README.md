<h1 align="center">Welcome to taro-best-cli 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/dylan-farm/taro-best-cli">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/dylan-farm/taro-best-cli)


## Author

👤 **dylan-farm**

* Github: [@dylan-farm](https://github.com/dylan-farm)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/dylan-farm/taro-best-cli/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 快速开始

- [简介](#简介)
- [技术选型](#技术选型)
- [运行](#运行)
- [相关资料学习](#相关资料学习)
  - [Taro 简介](#taro-简介)
  - [文档](#文档)
- [引入Dva](#引入dva)
- [Requrest 封装](#requrest-封装)
- [搭建本地 mock 服务](#搭建本地-mock-服务)
  - [安装依赖](#安装依赖)
  - [配置 json-server](#配置-json-server)
  - [启动服务](#启动服务)
- [功能列表](#功能列表)

## 简介

打造全网多端统一开发最佳脚手架，让你不再为快速开发项目为难！

## 技术选型

- Taro
- Taro UI
- TypeScript **为 JavaScript 的开发增加了静态类型、类、模块、接口和类型注解。**
- Dva（ Redux ） **基于 redux 最佳实践实现的 framework，简化使用 redux 和 redux-saga 的操作。**
- seamless-immutable **配合redux为项目的数据状态管理带来极大的性能提升。**
- json-server **更好的分工合作，让前端能在不依赖后端环境的情况下进行开发**
- mockjs **生成随机数据，简单方便, 无侵入性, 基本覆盖常用的接口数据类型。**

## 运行

**本脚手架的稳定运行环境：**

- taro v1.3.0-beta.6
- nodejs v10.15.3
- gulp 
    - CLI version: 2.2.0
    - Local version: 3.9.1
- 微信开发者工具最新版
- 其他依赖采用稳定版本即可

```

# build setup

$ git clone https://github.com/dylan-farm/taro-best-cli

$ npm install
// or 
$ yarn

# development

$ npm run dev:weapp
$ npm run dev:h5

# production

$ npm run build:weapp
$ npm run build:h5

// 在项目根目录下执行新建终端，开启MockServer
$ gulp mock

```

## 相关资料学习

### Taro 简介

[Taro](https://github.com/NervJS/taro) 是一个遵循 [React](https://reactjs.org/) 语法规范的多端开发解决方案。现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动小程序、H5、React-Native 等）运行的代码。

### 文档

- [Taro 官方文档](https://nervjs.github.io/taro/docs/README.html)
- [Taro UI 官方文档](https://taro-ui.aotu.io/#/docs/introduction)
- [React 官方文档](https://reactjs.org/docs/hello-world.html)  
- [React 中文文档](https://react.docschina.org/docs/hello-world.html)
- [Dva 文档](https://dvajs.com/)
- [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) 
- [json-server](https://github.com/typicode/json-server)
- [MockJs 文档](http://mockjs.com/examples.html)

## 引入Dva
在状态管理这部分，采用了dva（redux + redux-saga），文件结构如下：

```
├── models
│   ├── index.ts
│   ├── home.ts
│   └── ...
└── store
    ├── index.ts
    └── dva.ts
```
- models 文件夹下的 model 是对应各个模块的单独状态管理，例如：home.ts

- store  文件夹下 dva.ts 是基于dva用来创建 `createApp` 方法，index.ts 调用 `createApp` 集成 `models & initialState` 生成 store 全局状态管理对象。

dva的具体使用 请查看[Dva 文档](https://dvajs.com/)

## Requrest 封装

Taro 已经封装了[网络请求](https://nervjs.github.io/taro/docs/native-api.html)，支持 Promise 化使用。本项目对`Taro.request()`进一步封装，以便统一管理接口、根据不同环境选择不同域名、设置请求拦截器、响应拦截器等。代码见 [/src/utils/request/api.ts](https://github.com/dylan-farm/taro-best-cli/tree/master/src/utils/request/api.js)。

## 搭建本地 mock 服务

mock服务功能 选用了 [json-server](https://github.com/typicode/json-server) 实现 mock 服务，搭建过程中参考了[纯手工打造前端后端分离项目中的 mock-server](https://yanm1ng.github.io/2017/06/12/%E7%BA%AF%E6%89%8B%E5%B7%A5%E6%89%93%E9%80%A0%E5%89%8D%E7%AB%AF%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84mock-server/)。

[json-server](https://github.com/typicode/json-server) 是一个开箱即用的 REST API 模拟工具，它的文档中有一些简单示例。不过`json-server`还无法满足我对 mock 服务器的全部需求，所以后面还需要对它进行一些配置。

完整代码见 [/mock](https://github.com/dylan-farm/taro-best-cli/tree/master/mock)。

### 安装依赖

这里需要安装几个依赖包，之前安装过就不用再装了：

```
$ npm install json-server mockjs gulp gulp-nodemon browser-sync --save-dev
```

要注意 gulp 需要是 3.9.\* 版本。后续编译小程序或者启动 mock 服务器时如果报错，再运行一遍`npm install`就好了。

### 配置 json-server

```
└── mock
    ├── factory
    │   └── book.js
    ├── db.js
    ├── routes.js
    └── server.js
```

首先使用 Mock.js 生成一些模拟数据。这部分代码见 [/mock/factory/book.js](https://github.com/imageslr/taro-library/tree/master/mock/factory/book.js)，Mock.js 的使用方式请查看[文档](http://mockjs.com/examples.html)。

然后创建 mock 数据源，代码见 [/mock/db.js](https://github.com/imageslr/taro-library/tree/master/mock/db.js)。`json-server`会将数据源中的**键名**作为接口路径名，**值**作为接口返回的数据。

`json-server`不支持在数据源的键名中添加`/`，无法直接设置`/books/new`这样的二级路径，因此我们需要使用`json-server`提供的路由重写功能：在数据源中，使用`books-new`表示`books/new`；在路由表中，将`/books/new`指向`/books-new`。代码见 [/mock/routes.js](https://github.com/imageslr/taro-library/tree/master/mock/routes.js)。

最后在 [/mock/server.js](https://github.com/imageslr/taro-library/tree/master/mock/server.js) 中添加两个中间件。第一个是将所有的`POST`请求转为`GET`请求，防止数据被修改；第二个是为服务器设置一个 750ms 的延迟，模拟更真实的加载过程：

```JS
// 将 POST 请求转为 GET
server.use((request, res, next) => {
  request.method = "GET";
  next();
});

// 添加一个500ms的延迟
server.use((request, res, next) => {
  setTimeout(next, 500);
});
```

### 启动服务

在项目根目录下执行`gulp mock`即可启动 mock 服务器，之后改动`/mock`文件夹的任何内容，均会实时刷新 mock 服务器。代码见 [/gulpfile.js](https://github.com/imageslr/taro-library/tree/master/gulpfile.js)。

开发时，首先执行如下命令，编译小程序：

```
$ npm run dev:weapp
```

然后新建一个终端，执行以下命令，启动 mock 服务器：

```
$ gulp mock
```

之后就享受愉快的开发过程吧！


## 功能列表

### DONE
* [x] 01.初始化项目流程介绍、目录设计
* [x] 02.利用alias别名优化路径引用
* [x] 03.封装request 暴露get/post方法
* [x] 04.异常日志上报功能
* [x] 05.搭建本地mock服务
* [x] 06.h5请求设置反向代理，使其可以请求本地mock服务
* [x] 07.增加登录态（token附加到请求header头）
* [x] 08.开启dll功能，减少首屏文件体积，增加编译速度
* [x] 09.小程序端生成分享海报功能，可自主配置海报图片/文字/小程序码等

### TODO
* [ ] 弱网请求失败时自动发起api重试
* [ ] 实战接入日志平台


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
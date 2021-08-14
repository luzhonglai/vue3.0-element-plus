<!--
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-07-23 23:53:50
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-09 00:29:09
-->

# multiple-vue3-pc (vue3 与 tsx 体验版)

> 基于 vue3.0 + typeScript + element-plus + sass/less 适配方案，适用于多页面 cms 端模板脚手架。

## 模版亮点

- 多页面模块开发
- mock 数据模拟
- 接口 Log 窗口调试，
- Eelment-plus 组件按需加载
- less/sass
- Webpack 编译优化
- Vuex 封装
- Axios 封装
- Eslint+Pettier 统一开发规范
- 

### 组织结构

```base
├── mock        ---- mock数据
│   └── modules
├── public
├── src
│   ├── api
│   ├── assets
│   ├── common  ---- 工具配置
│   ├── layout  ---- 公告布局
│   ├── plugins ---- 模版插件
│   ├── router  ---- 路由模块
│   ├── store   ---- 全局vuex
│   ├── styles  ---- 全局样式
│   ├── types   ---- 类型配置
│   ├── utils   ---- 公共函数
│   └── views   ---- 视图页面
└── tests
    └── unit
```

### 准备工作

```bash
#确保安装yarn
npm install yarn -g

#安装依赖
yarn install
```

### 多页面配置

```javascript
// 脚本指定目录进行打包
yarn run serve  appName 'demo'

// 配置打包多页面
```

<img src="./src/assets/code.png" width="100%" height="100%" alt="多页面 配置">

### 快速开始

```bash
yarn install
yarn run serve
```

### 优化问题记录

```javascript
// 编译优化
```

### 最后

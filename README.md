# multiple-vue3-pc

> 基于 vue3.0 + tscript + element-plus + sass/less 适配方案，适用于多页面cms端模板脚手架。

## 项目亮点

- [配置多环境变量](#env)
- [多页面模块开发](#multiple)
- mock 数据模拟
- 接口 Log 窗口调试，
- Eelment-plus 组件按需加载
- less/sass
- Webpack 编译优化
- Vuex  封装
- Axios 封装
- Eslint+Pettier 统一开发规范

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

### ✅ 配置多环境变量

- 通过 `npm run serve` 启动本地 , 执行 `development`
- 通过 `npm run test` 打包测试 , 执行 `test`
- 通过 `npm run build` 打包正式 , 执行 `production`

```javascript
"scripts": {
  "serve": "vue-cli-service serve --open",
  "test": "vue-cli-service build --mode test",
  "build": "vue-cli-service build",
}
```

### ⚠️ 注意


### 快速开始

```bash
yarn install
yarn run serve
```

### 优化问题记录


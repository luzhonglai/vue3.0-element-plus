/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-04-29 18:07:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-09 00:22:15
 */

/* --------------------------------- 环境配置 封装 -------------------------------- */

const env = process.env.NODE_ENV || 'prod'

const EnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  },
  prod: {
    baseApi: '//futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  }
}

/* -------------------------------- 多页面 打包配置 -------------------------------- */

const EnvPage = {
  buildMoudle: 'buildView'
}

export default {
  env,
  EnvPage,
  ...EnvConfig[env]
}

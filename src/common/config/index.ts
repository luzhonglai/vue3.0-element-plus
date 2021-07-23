/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-04-29 18:07:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-07-22 16:39:21
 */

module.exports = {
  title: 'vue-h5-template',
  baseUrl: 'http://localhost:9018',
  baseApi: process.env.NODE_ENV === 'development' ? '/api' : '/portal', // 本地api请求地址
  nativeReq: process.env.NODE_ENV === 'development' ? false : true, //走壳方法交互服务端// 访问生产
  h5gateway: 'portal'
}

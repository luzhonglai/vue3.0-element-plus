/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-04-29 18:07:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-07-26 18:02:27
 */

module.exports = {
  title: 'vue-h5-template',
  baseUrl: 'http://localhost:9018',
  baseApi: process.env.NODE_ENV === 'development' ? '/api' : '/portal', // 本地api请求地址
  h5gateway: 'portal',
  appName: ['demo']
}

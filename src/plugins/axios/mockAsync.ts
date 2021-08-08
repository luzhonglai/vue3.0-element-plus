/*
 * @Author: ZhongLai Lu
 * @LastEditors: Zhonglai Lu
 * @Date: 2021-02-09 17:18:01
 * @LastEditTime: 2021-08-08 17:33:13
 */

import qs from 'qs'
import config from './config'
import { debugInfo } from './debugInfo'
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

const { baseUrl, isLocalMock } = config
const PATH_URL = baseUrl[isLocalMock ? 'devMock' : 'proMock']

/**
 * @name:
 * @msg: Mock服务代理请求
 * @param {*} options
 * @return {*} Promise
 */

const mockAsync: AxiosInstance = axios.create({
  baseURL: PATH_URL, // api 的 base_url
  timeout: config.requestTimeout // 请求超时时间
})

// request拦截器

mockAsync.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.method === 'post' && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data)
    }
    // 记录时间戳
    config['startDate'] = Date.now()
    return config
  },
  (error: AxiosError) => {
    // Do something with request error
    Promise.reject(error)
    console.log(error) // for debug
  }
)

mockAsync.interceptors.response.use(
  (response: AxiosResponse) => {
    debugInfo(response)
    return response.data
  },
  async (error: AxiosError) => {
    const response: any = error.response
    debugInfo(response, error.message)
    return Promise.reject(error)
  }
)

/**
 * await错误方法封装
 * @param {*} promise promise 函数
 * @[null, data] 成功
 * @[err, null] 失败
 */

export function awaitWrap(promise: any) {
  if (!promise) new Error('需要传入promise')
  return promise.then((data: any) => [null, data]).catch((err: any) => [err, null])
}

export default mockAsync

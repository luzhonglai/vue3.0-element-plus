/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-07-22 16:41:24
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-07-23 15:05:39
 */

/**
 * @name: 挂在当前组件
 * @return {*}
 * @param {vue} app
 */
import Vue from 'vue'

export const setGlobalComponent = (app?): void => {
  // app.componets()
  const files = require.context('./', true, /\.(vue|jsx|jsx)$/)
  files.keys().forEach((key) => {
    const config = files(key)
    const name = key
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .split('/')[0]

    app.component(name, config.default || config)
  })
}

registeGlobalComponent()

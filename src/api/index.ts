/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-07-23 15:27:22
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-07-23 15:50:21
 */

/**
 * @name:
 * @return {*}
 */
const modules = require.context('./', true, /\.ts$/).keys()
const objName = { ...modules }

export default objName

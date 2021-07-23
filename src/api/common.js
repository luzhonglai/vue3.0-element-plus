/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-05-10 10:50:43
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-07-23 15:31:18
 */

import { fetch } from '@/plugins/axios'
//  test
const getUser = (params) => fetch({ url: '/api/home/user', method: 'post', params })

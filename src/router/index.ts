/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-05-07 15:35:43
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-07-25 23:52:17
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { AppRouteRecordRaw } from '@/router/types'

const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: 'hello',
    meta: {
      title: '测试demo',
      icon: ''
    },
    children: [
      {
        path: 'hello',
        name: 'hello',
        meta: {
          title: '白名单管理',
          icon: ''
        },
        component: () => import('@/views/hello')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap as RouteRecordRaw[]
})
export { constantRouterMap }
export default router

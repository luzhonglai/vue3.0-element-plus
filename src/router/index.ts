/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-05-07 15:35:43
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-13 23:34:32
 */
import { AppRouteRecordRaw } from '@/router/types'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {},
    component: () => import('@/views/hello')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap as RouteRecordRaw[]
})

export { constantRouterMap }
export default router

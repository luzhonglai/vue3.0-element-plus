/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-05-07 15:34:30
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-10 16:52:49
 */

import mutations from './mutations'
import wsCache from '@/utils/cache'
import { AppRouteRecordRaw } from '@/router/types'
import { getFilterRoutes } from './utils'
import store from '@/store'

const permissionActions = {
  GenerateRoutes(): Promise<unknown> {
    return new Promise((resolve) => {
      // 路由权限控制
      let routerMap: AppRouteRecordRaw[] = []
      routerMap = getFilterRoutes(wsCache.get(store.state.app.menuPermission))
      mutations.SET_ROUTERS(routerMap)
      resolve(routerMap)
    })
  }
}

type PermissionActionsType = typeof permissionActions

export { PermissionActionsType }
export default permissionActions

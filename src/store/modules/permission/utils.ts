// import { AppRouteRecordRaw } from '@/router/types'
// import path from 'path'
// import { isExternal } from '@/utils/validate'
import { getParentLayout } from '@/router/utils'

/* Layout */
const Layout = () => import('@/layout/index.vue')

// 用于后端请求，动态过滤路由
function getFilterRoutes(routes: any[]): any[] {
  const res = []
  for (const route of routes) {
    const data: any = {
      path: route.url,
      name: route.url,
      redirect: route.redirect
    }
    data.meta = Object.assign({}, route.meta || {}, {
      title: route.name || route.meta.title,
      icon: route.iconClass
    })

    if (route.router) {
      // 暂时特殊处理， 后期优化
      if (route.router === 'views/home/index') {
        delete route.children
      }
      // 动态加载路由文件，可根据实际情况进行自定义逻辑
      data.component =
        route.router === '#'
          ? Layout
          : route.router.includes('##')
          ? getParentLayout(route.router.split('##')[1])
          : // 必须加'.vue'后缀，而不能直接把'.vue'后缀写在component中。否则会报出警告。。
            () => import('@/' + route.router + '.tsx')
    }
    // recursive child routes
    if (route.children) {
      data.children = getFilterRoutes(route.children)
    }
    res.push(data)
  }

  /**
   * 设置404
   * 由于是动态路由，所以没配置到静态里，404路由需要在路由最后
   */
  res.push({
    path: '/:path(.*)*',
    redirect: '/404',
    name: '404',
    meta: {
      hidden: true
    }
  })

  return res
}

export { getFilterRoutes }

/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-02-05 10:40:53
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-07-23 15:47:28
 */

import App from './App.vue'
import store from './store'
import router from './router'
import { createApp } from 'vue'
import { setElement } from '@/plugins/element'
import { setGlobalComponent } from '@/components'

// 引入mock
// import '@/mock/mock-server'

// 引入路由守护（权限）
// import './permiussion'

import '@/styles/reset.css'
import '@/styles/index.less'
import '@/assets/icons/svg'

const app = createApp(App)
setGlobalComponent(app)
setElement(app)

app
  .use(store)
  .use(router)
  .mount('#app')

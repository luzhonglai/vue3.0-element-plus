/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-02-05 10:40:53
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-01 12:30:04
 */

import App from './App'
import store from './store'
import router from './router'
import { createApp } from 'vue'
import { setElement } from '@/plugins/element'
import { setGlobalComponent } from '@/components'

const app = createApp(App)

/* gloabl  css */
import '@/styles/reset.css'
import '@/styles/index.less'
import '@/assets/icons/svg'

// import '@/mock/mock-server'
// import './permiussion'

setGlobalComponent(app)
setElement(app)
app
  .use(store)
  .use(router)
  .mount('#app')

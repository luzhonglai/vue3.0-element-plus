/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-02-05 10:40:53
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-12 13:54:36
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
console.log('环境变量=>', process.env)

import fetch from '@/plugins/axios'
import api from '@/api/index'
import wsCache from './utils/cache'
app.config.globalProperties.$api = api
app.config.globalProperties.$fetch = fetch
app.config.globalProperties.$wsCache = wsCache

setGlobalComponent(app)
setElement(app)

app
  .use(router)
  .use(store)
  .mount('#app')

/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-02-05 10:40:53
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-14 19:07:14
 */

import App from './App'
import store from './store'
import router from './router'
import { createApp } from 'vue'
import { setupElement, setupGlobalMethods, setupCustomComponents, setupDirectives } from './plugins'

const app = createApp(App)
console.log('环境变量---->', process.env)

setupElement(app)
setupDirectives(app)
setupGlobalMethods(app)
setupCustomComponents(app)

app
  .use(router)
  .use(store)
  .mount('#app')

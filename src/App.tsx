/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-07-21 11:12:56
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-13 23:00:10
 */

import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

/* gloabl  css */
import '@/styles/reset.css'
import '@/styles/index.less'
import '@/assets/icons/svg'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    )
  }
})

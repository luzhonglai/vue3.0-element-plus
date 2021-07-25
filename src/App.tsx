/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-07-21 11:12:56
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-07-25 23:46:46
 */
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import './style/main.scss'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          <RouterLink to="/">Home</RouterLink> |<RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView />
      </>
    )
  }
})

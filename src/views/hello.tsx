/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-05-08 10:41:31
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-15 14:35:11
 */

import { defineComponent, getCurrentInstance, ref } from 'vue'
interface InputProps {
  value: string
  onChange: (value: string) => void
}

export default defineComponent({
  name: 'Home',
  setup(props: InputProps, context) {
    const { ctx }: any = getCurrentInstance()
    const name = ref('asds')
    return () => <div>name</div>
  }
})

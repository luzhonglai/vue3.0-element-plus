/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-05-08 10:41:31
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-14 19:06:22
 */

import { defineComponent, getCurrentInstance } from 'vue'
interface InputProps {
  value: string
  onChange: (value: string) => void
}

export default defineComponent({
  name: 'Home',
  setup(props: InputProps, context) {
    const { ctx }: any = getCurrentInstance()
    console.log(ctx)

    const handleChange = (event: any) => {
      props.onChange(event.target.value)
    }
    return () => <div></div>
  }
})

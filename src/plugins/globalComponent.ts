/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-08-14 16:45:00
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-08-14 18:42:01
 */

export const setupCustomComponents = (app?): void => {
  // app.componets()
  const files = require.context('../components/', true, /\.(vue|jsx|tsx)$/)
  files.keys().forEach((key) => {
    const config = files(key)
    const name = key
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .split('/')[0]

    app.component(name, config.default || config)
  })
}

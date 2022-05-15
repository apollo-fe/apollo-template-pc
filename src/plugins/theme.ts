/*
 * @Author: Marshall
 * @Date: 2022-05-14 12:31:57
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 12:38:51
 * @Description: 
 * @FilePath: /apollo-admin-plus/src/plugins/theme.ts
 */
export default () => {
  const el = document.documentElement
  el.style.setProperty('--el-color-primary', '#27b791')
  el.style.setProperty('--el-color-success', '#27b791')
  el.style.setProperty('--el-color-warning', '#faad14')
  el.style.setProperty('--el-color-danger', '#ff6d2c')
  el.style.setProperty('--el-color-error', '#ff6d2c')
  el.style.setProperty('--el-color-info', '#42b8dd')
};
/*
 * @Author: Marshall
 * @Date: 2022-04-30 14:43:29
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-30 14:43:29
 * @Description:
 * @FilePath: /apollo-admin-plus/src/utils/validate.ts
 */
/**
 * 判断是否为外部资源
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

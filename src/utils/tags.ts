/*
 * @Author: Marshall
 * @Date: 2022-05-03 05:40:22
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-03 05:40:23
 * @Description:
 * @FilePath: /apollo-admin-plus/src/utils/tags.ts
 */
const whiteList = ['/login', '/import', '/404', '/401'];

/**
 * path 是否需要被缓存
 * @param {*} path
 * @returns
 */
export function isTags(path) {
  return !whiteList.includes(path);
}

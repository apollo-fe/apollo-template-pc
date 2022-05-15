/*
 * @Author: Marshall
 * @Date: 2022-05-03 05:26:12
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-03 05:26:12
 * @Description:
 * @FilePath: /apollo-admin-plus/src/utils/index.ts
 */
/**
 * a-b > AB 转驼峰
 * @param str
 * @returns
 */
export function transformStr(str) {
  const re = /-(\w)/g;
  const tempStr = str.replace(re, function ($0, $1) {
    return $1.toUpperCase();
  });
  return tempStr[0].toUpperCase() + tempStr.substr(1);
}

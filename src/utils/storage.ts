/*
 * @Author: Marshall
 * @Date: 2022-04-28 14:53:02
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-28 14:53:02
 * @Description:
 * @FilePath: /apollo-admin-plus/src/utils/storage.ts
 */
/**
 * 存储数据
 */
export const setItem = (key: string, value: any): void => {
  // 将数组、对象类型的数据转化为 JSON 字符串进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};

/**
 * 获取数据
 */
export const getItem = (key: string): any => {
  const data = window.localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

/**
 * 删除数据
 */
export const removeItem = (key: string): void => {
  window.localStorage.removeItem(key);
};

/**
 * 删除所有数据
 */
export const removeAllItem = (): void => {
  window.localStorage.clear();
};

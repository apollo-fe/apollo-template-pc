/*
 * @Author: Marshall
 * @Date: 2022-04-30 04:32:17
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-30 04:51:52
 * @Description:
 * @FilePath: /apollo-admin-plus/src/store/modules/permission.ts
 */
import { defineStore } from 'pinia';
import { publicRoutes } from '@/router';

export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => {
    return {
      routes: publicRoutes,
    };
  },
  actions: {
    filterRoutes(menus: Array<any>) {
      return menus;
    },
  },
});

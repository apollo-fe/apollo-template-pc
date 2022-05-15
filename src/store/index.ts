/*
 * @Author: Marshall
 * @Date: 2022-04-28 10:59:49
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-02 17:35:52
 * @Description:
 * @FilePath: /apollo-admin-plus/src/store/index.ts
 */
import { createPinia } from 'pinia';
import { useUserStore } from './modules/user';
import { useAppStore } from './modules/app';
import { useThemeStore } from './modules/theme';
import { usePermissionStore } from './modules/permission';

const store = createPinia();

export { useUserStore, useAppStore, usePermissionStore, useThemeStore };

export default store;

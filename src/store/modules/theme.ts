/*
 * @Author: Marshall
 * @Date: 2022-05-02 17:04:45
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-02 18:33:17
 * @Description:
 * @FilePath: /apollo-admin-plus/src/store/modules/theme.ts
 */
import { defineStore } from 'pinia';
import variables from '@/styles/variables.module.scss';
import { getItem, setItem } from '@/utils/storage';
import { APP_MAIN_COLOR, APP_DEFAULT_COLOR } from '@config/constant';

console.log('variables:', variables);

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => {
    return {
      mainColor: getItem(APP_MAIN_COLOR) || APP_DEFAULT_COLOR,
      variables,
    };
  },
  actions: {
    setMainColor(newColor: string = APP_DEFAULT_COLOR) {
      this.mainColor = newColor;
      this.variables.menuBg = newColor;
      setItem(APP_MAIN_COLOR, newColor);
    },
  },
});

/*
 * @Author: Marshall
 * @Date: 2022-04-28 10:59:49
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 12:35:49
 * @Description: Vue
 * @FilePath: /apollo-admin-plus/src/main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import '@/styles/index.scss';
// 导入权限控制模块
import './permission';
import { initTheme } from './plugins';
initTheme()

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');



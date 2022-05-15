/*
 * @Author: Marshall
 * @Date: 2022-04-30 03:58:52
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-30 04:11:31
 * @Description: 系统进度条
 * @FilePath: /apollo-admin-plus/src/plugins/nprogress.ts
 */
import nprogress from 'nprogress';
import { APP_PROCESS_BAR } from '@config/constant';
import 'nprogress/nprogress.css';

const Progress = {
  start: () => APP_PROCESS_BAR && nprogress.start(),
  done: () => APP_PROCESS_BAR && nprogress.done(),
};

export default Progress;

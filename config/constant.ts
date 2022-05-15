/*
 * @Author: Marshall
 * @Date: 2022-04-28 14:39:26
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-10 21:40:24
 * @Description:
 * @FilePath: /apollo-admin-plus/config/constant.ts
 */
/**
 * @name Config
 * @description 项目配置
 */

enum TokenType {
  Customer = 1,
  Company,
  Mobile
}

// 应用名
export const APP_TITLE = '联空医加';

// 本地服务端口
export const VITE_PORT = 3000;

// prefix
export const API_PREFIX = '/api';

// serve
export const API_BASE_URL = '/api';
export const API_TARGET_URL = 'http://localhost:3000';

// mock
export const MOCK_API_BASE_URL = '/mock/api';
export const MOCK_API_TARGET_URL = 'http://localhost:3000';

// iconfontUrl
export const ICONFONTURL = '//at.alicdn.com/t/font_3004192_9jmc1z9neiw.js'; // 去色版

// 包依赖分析
export const ANALYSIS = true;

// 是否支持Md渲染
export const MARKDOWN = true;

// 代码压缩
export const COMPRESSION = true;

// 删除 console
export const VITE_DROP_CONSOLE = true;

// token名称
export const APP_TOKEN_NAME = 'AccessToken';

// 系统进度条展示
export const APP_PROCESS_BAR = true;

// 系统路由白名单
export const APP_WHITE_LIST: Array<string> = ['/login', '/404'];

// token失效回退到登录页时是否记录本次的路由
export const APP_RECORD_ROUTE = true;

export const APP_LOGO_HEIGHT = 40;

export const APP_LOGO_SRC = 'images/logo-mini.png';

export const APP_PADDING_LARGE = 20;
export const APP_PADDING = 16;
export const APP_PADDING_SMALL = 12;

// 主题色保存的 key
export const APP_MAIN_COLOR = 'main_color';
// 默认色值
export const APP_DEFAULT_COLOR = '#27b791';

export const APP_MENU_UNIQUE_OPEN = true;

// tags
export const APP_TAGS_VIEW = 'tagsView';

export const APP_API_TIMEOUT = 5000;

export const APP_API_CONTENT_TYPE = 'application/json;charset=UTF-8';

export const APP_API_HEADER_TOKEY_TYPE = TokenType.Customer;

export const APP_API_SUCCESS_CODE = [200, 0]
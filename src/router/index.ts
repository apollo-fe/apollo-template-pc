/*
 * @Author: Marshall
 * @Date: 2022-04-28 10:59:49
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-03 10:24:36
 * @Description: 路由
 * @FilePath: /apollo-admin-plus/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store';
import Layout from '@/layout/Index.vue';
import BlankLayout from '@/layout/Blank.vue';

export const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页',
          keepAlive: true,
          requireAuth: true,
          icon: 'home-filled',
        },
        component: () => import('@/views/home/index.vue'),
      },
      // {
      //   path: '/hospital',
      //   name: 'Hospital',
      //   meta: {
      //     title: '医院管理',
      //     keepAlive: true,
      //     requireAuth: true,
      //     icon: 'office-building',
      //   },
      //   component: () => import('@/views/hospital/index.vue'),
      // },
      {
        path: '/hospital',
        name: 'Hospital',
        component: BlankLayout,
        meta: {
          title: '医院管理',
          icon: 'office-building',
        },
        redirect: '/hospital/index',
        children: [
          {
            path: '/hospital/index',
            name: 'HospitalIndex',
            meta: {
              title: '医院管理',
              keepAlive: true,
              requireAuth: true,
              icon: 'office-building',
            },
            component: () => import('@/views/hospital/index.vue'),
          },
        ],
      },
    ],
  },
];

/**
 * 初始化路由表
 */
export function resetRouter() {
  const userStore = useUserStore();

  if (
    userStore.userInfo &&
    userStore.userInfo.permission &&
    userStore.userInfo.permission.menus
  ) {
    const menus = userStore.userInfo.permission.menus;
    menus.forEach((menu) => {
      router.removeRoute(menu);
    });
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

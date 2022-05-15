/*
 * @Author: Marshall
 * @Date: 2022-04-30 03:51:29
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 10:48:35
 * @Description: 权限控制器
 * @FilePath: /apollo-admin-plus/src/permission.ts
 */
import router from '@/router';
import { Progress } from '@/plugins';
import { useUserStore, usePermissionStore } from '@/store';
import { APP_WHITE_LIST, APP_RECORD_ROUTE } from '@config/constant';



router.beforeEach(async (to, from, next) => {
  Progress.start();
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  const hasToken = userStore.accessToken;
  console.log('', to);
  const { code } = to.query
  if (hasToken) {
    if (to.path === '/login') {
      next('/');
      Progress.done();
    } else {
      // 判断用户资料是否获取
      // 若不存在用户信息，则需要获取用户信息
      if (!userStore.hasUserInfo) {
        // 触发获取用户信息的 action，并获取用户当前权限
        const { permission } = await userStore.getUserInfo();
        // 处理用户权限，筛选出需要添加的权限
        // const filterRoutes = await permissionStore.filterRoutes(
        //   permission.menus,
        // );

        // // // 利用 addRoute 循环添加
        // filterRoutes.forEach((item) => {
        //   router.addRoute(item);
        // });
        // 添加完动态路由之后，需要在进行一次主动跳转
        return next(to.path);
      }
      next();
    }
  } else if(code) {
    // 根据code换区token
    await userStore.autoLogin(code)

    // 删除路由模版
    

    next(to.path)
  } else {
    // 没有token的情况下，可以进入白名单
    if (APP_WHITE_LIST.includes(to.path)) {
      next();
    } else {
      if (APP_RECORD_ROUTE) {
        next(`/login?redirect=${to.path}`);
      } else {
        next('/login');
      }
      Progress.done();
    }
  }
});

router.afterEach(() => {
  Progress.done();
});

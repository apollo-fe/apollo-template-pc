/*
 * @Author: Marshall
 * @Date: 2022-04-28 10:59:49
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-10 22:34:53
 * @Description:
 * @FilePath: /apollo-admin-plus/src/store/modules/user.ts
 */
import { defineStore } from 'pinia';
import router, { resetRouter } from '@/router';
import { APP_TOKEN_NAME } from '@config/constant';
import { setItem, getItem, removeAllItem } from '@/utils/storage';
import api from '@/api';

interface ILoginForm {
  username: string;
  password: string;
}

interface IPermission {
  menus: Array<never>;
}

interface IUserInfo {
  permission: IPermission;
  avatar: string;
}

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      accessToken: getItem(APP_TOKEN_NAME) || '',
      userInfo: null,
    };
  },
  getters: {
    hasUserInfo(state) {
      return !!state.userInfo;
    },
  },
  actions: {
    setAccessToken(token: string) {
      this.accessToken = token;
      setItem(APP_TOKEN_NAME, token);
    },
    setUserInfo(userInfo: IUserInfo) {
      this.userInfo = userInfo;
    },
    login(data: ILoginForm) {
      console.log(data);
      return new Promise<void>((resolve, reject) => {
        const accessToken = '111111111111111111111111111';
        if (accessToken) {
          this.setAccessToken(accessToken);

          resolve();
        } else {
          reject(new Error(`登录接口异常，未正确返回${APP_TOKEN_NAME}`));
        }
      });
    },
    async autoLogin(code) {
      const accessToken = await api.autoLogin(code);

      this.setAccessToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY2NhNzI1ZGItMjIzNi00MzhkLTk2ZjktODdkODJkNjM5NTc4IiwiQ3VzdG9tZXJJRCI6IjA1ZGNjNGE1LTBkZDUtNDViNy1iYmZlLTliMzYzMzgwYTFlMCIsIkN1c3RvbWVyTmFtZSI6IuWkjeaXpuWkp-WtpumZhOWxnuecvOiAs-m8u-WWieenkeWMu-mZoiIsIkN1c3RvbWVyU2hvcnROYW1lIjoi5aSN5pem5aSn5a2m6ZmE5bGe55y86ICz6by75ZaJ56eR5Yy76ZmiIiwiRW1wbG95ZWVJRCI6ImNjYTcyNWRiLTIyMzYtNDM4ZC05NmY5LTg3ZDgyZDYzOTU3OCIsIkVtcGxveWVlQ29kZSI6IjAyXzAxXzM1NzciLCJFbXBsb3llZU5hbWUiOiLpn6nmnJ0iLCJMb2dpbklEIjoiMjAyMjA1MTAyMTExMDUxNTI0MDE0MTYyMzM4OTc5ODQxIiwiUHJvdmlkZXIiOiIiLCJPcGVuVW5pb25JZCI6IiIsIk9wZW5JZCI6IiIsInN1YiI6ImNjYTcyNWRiLTIyMzYtNDM4ZC05NmY5LTg3ZDgyZDYzOTU3OCIsInRva2VuX3VzYWdlIjoiYWNjZXNzX3Rva2VuIiwianRpIjoiY2I1ZTdhNGUtYTEzOC00MzAyLWJhYTItNmY1N2M5YTA1ODY0IiwiY2ZkX2x2bCI6InByaXZhdGUiLCJzY29wZSI6Im9wZW5pZCIsImF1ZCI6WyJyZXNvdXJjZV9zZXJ2ZXIiLCJyZXNvdXJjZV9zZXJ2ZXJfY29yZSIsInJlc291cmNlX2hpc2FwaSJdLCJhenAiOiIwNWRjYzRhNS0wZGQ1LTQ1YjctYmJmZS05YjM2MzM4MGExZTAiLCJuYmYiOjE2NTIxODgyNjYsImV4cCI6MTY1MjE5NTQ2NiwiaWF0IjoxNjUyMTg4MjY2LCJpc3MiOiJodHRwczovL21wbHVzLmxpbmtpbmdjbG91ZC5jbi8ifQ.Tl-t0SEvlRlrps4TLkHoKKgIbIstoBIZEntlsAO7jFc");
      await api.hello()
    },
    getUserInfo() {
      // const res = await getUserInfo()
      const res = {
        permission: {
          menus: [],
        },
        avatar:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      };
      this.setUserInfo(res);
      return res;
    },
    logout() {
      resetRouter();
      this.setAccessToken('');
      this.setUserInfo({} as IUserInfo);
      removeAllItem();
      router.push('/login');
    },
  },
});

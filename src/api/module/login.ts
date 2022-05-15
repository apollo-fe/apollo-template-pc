/*
 * @Author: Marshall
 * @Date: 2022-04-28 10:59:49
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-10 22:30:20
 * @Description: 用户相关接口
 * @FilePath: /apollo-admin-plus/src/api/module/login.ts
 */
import request from '@/utils/request';

interface IResponseType<P> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}
interface ILoginRes {
  token: string;
  expires: number;
}

/**
 * 登录
 */
export const login = (username: string, password: string) => {
  return request<IResponseType<ILoginRes>>({
    url: '/api/auth/login',
    method: 'post',
    data: {
      username,
      password,
    },
  });
};

/**
 * 登录
 */
export const autoLogin = (code: string) => {
  return request<IResponseType<ILoginRes>>({
    url: '/api/hospitalToken/getToken',
    method: 'post',
    data: {
      code,
    },
  });
};

export const hello = () => {
  return request<IResponseType<ILoginRes>>({
    url: '/api/hospital/hello/index',
    method: 'post',
  });
};



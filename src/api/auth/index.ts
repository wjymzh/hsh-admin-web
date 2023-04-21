import request from '@/utils/request';
// import { AxiosPromise } from 'axios';s
// import { CaptchaResult, LoginData, LoginResult } from './types';s

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: any) {
  return request({
    url: '/user/login',
    method: 'get',
    params: data
  });
}

/**
 * 注销API
 */
export function logoutApi() {
  return request({
    url: '/api/v1/auth/logout',
    method: 'delete'
  });
}

import axios from 'axios';
import { BASE_URL } from './constant.ts';
import { ACCESS_TOKEN } from '@/shared';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: { 'Content-Type': 'application/json' },
});

export const setAuthHeader = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  console.log(accessToken);
  if (accessToken) {
    apiInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
};

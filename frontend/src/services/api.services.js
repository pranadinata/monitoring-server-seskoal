import axios from "axios";
import { getCookie } from 'cookies-next';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  headers: {
    // 'Content-Type': 'multipart/form-data',
    "Accept": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = getCookie('monitoring-server-seskoal');
    // const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
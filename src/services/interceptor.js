import axios from "axios";
import { getToken } from "../utilities/auth";

const axiosAuth = axios.create();

export default axiosAuth.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

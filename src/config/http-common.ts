import axios from "axios";
import { apiBaseUrl } from "./constant";
import { getToken, isAuthenticated } from "@/helpers/auth";

const Api = axios.create({
  baseURL: apiBaseUrl,
});

Api.interceptors.request.use(
  (config: any) => {
    if (isAuthenticated()) {
      config.headers["Authorization"] = `Bearer: ${getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error),
);
export default Api;

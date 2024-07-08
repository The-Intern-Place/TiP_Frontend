import { AxiosRequestConfig } from "axios";
import Api from "./http-common";

interface HTTPParams<T> {
  method?: AxiosRequestConfig["method"];
  url: string;
  headers?: AxiosRequestConfig["headers"];
  params?: AxiosRequestConfig["params"];
  data?: T;
  needToken?: boolean;
  isFormData?: boolean;
  checkRefresh?: boolean;
}

export interface HTTPResponse<T> {
  status: string;
  token: string;
  data: T;
}

export interface IAxoisResponse {
  response: {
    data: {
      detail: string;
      access: string;
    };
    status: number;
    statusText: string;
  };
}

export const httpRequest =
  () =>
  async <T, R>(obj: HTTPParams<T>) => {
    const { method, data, url, params, headers } = obj;
    try {
      return await Api<R>({
        method: method,
        data: data,
        url: `/v1/${url}`,
        params: params,
      });
    } catch (error) {
      const err = error as unknown as IAxoisResponse;
    
      if (
        err?.response?.status === 401 &&
        !(headers && headers["X-no-auth-redirect"] === "true")
      ) {
        window.location.href = "/login";
      }
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data,
        },
      };
    }
  };

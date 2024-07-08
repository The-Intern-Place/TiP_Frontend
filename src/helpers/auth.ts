import { IUser } from "@/interfaces/user.interface";
import * as jose from "jose";

export const setToken = (token: string): void => {
  localStorage.setItem("accessToken", token);
};

export const getToken = (): string => {
  return localStorage.getItem("accessToken") || "";
};

export const getDecodedJwt = (token: string = getToken()): IUser => {
  try {
    return jose.decodeJwt(token);
  } catch (error) {
    return {} as IUser;
  }
};

export const removeToken = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const logOut = (cb?: VoidFunction) => {
  removeToken();
  cb?.();
};

export const isAuthenticated = () => {
  const userToken = getToken();

  if (userToken) {
    try {
      const decodedToken: IUser = getDecodedJwt(userToken);
      if (decodedToken.exp) {
        const { exp } = decodedToken;
        const currentTime = Date.now() / 1000;
        return exp > currentTime;
      }
    } catch (error) {
      return false;
    }
  }
};

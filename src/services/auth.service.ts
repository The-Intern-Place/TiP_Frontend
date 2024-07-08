import { LOGIN_URL, SIGN_UP_URL } from "@/config/apiUrls";
import { configuredApi } from "@/config/createApi-common";
import { ISignUpQuery } from "./interfaces/DTOs/auth.interface";
import { ISignUpResponse } from "./interfaces/Response/auth.interface";
import { IUser } from "@/interfaces/user.interface";

export const authApi = configuredApi
  .enhanceEndpoints({
    addTagTypes: ["addUser"],
  })
  .injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (data: any) => ({
          url: LOGIN_URL,
          method: "POST",
          data,
        }),
      }),
      signUp: builder.mutation<ISignUpResponse, ISignUpQuery>({
        query: (data: IUser) => ({
          url: SIGN_UP_URL,
          method: "POST",
          data,
        }),
      }),
    }),
  });

export const { useLoginMutation, useSignUpMutation } = authApi;

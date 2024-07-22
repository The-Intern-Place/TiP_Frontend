import { configuredApi } from "@/utils/config/createApi";
import { IUser } from "@/interfaces/user.interface";
import { ILoginDAO, ILoginDTO, ISignUpDAO, ISignUpDTO } from "./auth.interface";
import { Auth } from "@/utils/config/apiUrls";

export const authApi = configuredApi.enhanceEndpoints({}).injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    login: builder.mutation<ILoginDAO, ILoginDTO>({
      query: (data: any) => ({
        url: Auth.LOGIN,
        method: "POST",
        data,
      }),
    }),
    signUp: builder.mutation<ISignUpDAO, ISignUpDTO>({
      query: (data: IUser) => ({
        url: Auth.SIGN_UP,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;

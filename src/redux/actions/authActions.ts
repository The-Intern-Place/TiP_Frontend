import { APP_CONFIG } from "@/utilities/config/config";
import { ISignUpData } from "@/utilities/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import Error from 'next/error';

const BASE_URL = APP_CONFIG.BASE_URL;

const SIGN_UP = "auth:SIGN_UP";
// const SIGN_IN = 'auth:SIGN_IN';

export const signUpAction = createAsyncThunk(
  SIGN_UP,
  async (args: ISignUpData, { rejectWithValue }) => {
    // console.log(
    //   `\n\n\nhitting endpoint ${BASE_URL}/auth/register  --> `,
    //   JSON.stringify(args, null, 2),
    // );
    try {
      const { data } = await axios.post(`${BASE_URL}/user/signup`, args, {});
      // console.log('\n\n\ndispatching sign up action with data --> ', data);
      return data;
    } catch (error: any) {
      // console.log(error, 'error');
      return rejectWithValue(error.response.data);
    }
  },
);

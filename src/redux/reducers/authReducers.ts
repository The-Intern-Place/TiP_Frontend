import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { signUpAction } from "../actions/authActions";
export interface IAuthState {
  signInStatus: any;
  signInSuccess: any;
  signInError: any;
  signUpStatus: any;
  signUpSuccess: any;
  signUpError: any;

  isLoggedIn: boolean;
  userProfile: any;
}

const initialState: IAuthState = {
  signInStatus: "idle",
  signInSuccess: "",
  signInError: "",

  signUpStatus: "idle",
  signUpSuccess: "",
  signUpError: "",

  isLoggedIn: false,
  userProfile: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearSignInStatus: (state, action: PayloadAction<any>) => {
      state.signInStatus = "idle";
      state.signInSuccess = "";
      state.signInError = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpAction.pending, (state) => {
        state.signUpStatus = "loading";
      })
      .addCase(signUpAction.fulfilled, (state, { payload }) => {
        console.log("\n\n sign up payload --> ", payload);
        state.signUpStatus = "completed";
      })
      .addCase(signUpAction.rejected, (state, { payload }) => {
        state.signUpStatus = "failed";
      });
  },
});

export const { clearSignInStatus } = authSlice.actions;
export default authSlice.reducer;

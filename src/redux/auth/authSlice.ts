import { createSlice } from "@reduxjs/toolkit";
import type { authReduxTypes } from "../../types/authReduxTypes";
import { loginUser, registerUser } from "./authActions";

const initalState: authReduxTypes = {
  loading: false,
  error: null,
  user: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuth = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;

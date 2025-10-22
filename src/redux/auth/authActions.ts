/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  logInFormType,
  registerFormType,
} from "../../types/authFormTypes";
import { login, Register } from "../../api/auth";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: logInFormType, { rejectWithValue }) => {
    try {
      const response = await login(data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: registerFormType, { rejectWithValue }) => {
    try {
      const response = await Register(data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

import axios, { type AxiosResponse } from "axios";
import config from "../config/config";
import type { logInFormType, registerFormType } from "../types/authFormTypes";
const AUTH_TOKEN = "authToken"
export const login = async (data: logInFormType): Promise<AxiosResponse> => {
  const respose = await axios.post(`${config.apiUrl}/auth/login`, data);
  console.log(respose);
  if (respose.data.token) {
    localStorage.setItem(AUTH_TOKEN, respose.data.token);
  }
  return respose;
};
export const Register = async (
  data: registerFormType
): Promise<AxiosResponse> => {
  const respose = await axios.post(`${config.apiUrl}/auth/register`, data);
  return respose;
};

export const isAuth = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return !!token;
};

export const logout=()=>{
  localStorage.removeItem(AUTH_TOKEN);
}

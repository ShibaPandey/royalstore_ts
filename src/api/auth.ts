import axios, { type AxiosResponse } from "axios";
import config from "../config/config";
import type { logInFormType, registerFormType } from "../types/authFormTypes";

export const login = async (data: logInFormType): Promise<AxiosResponse> => {
  const response = await axios.post(`${config.apiUrl}/auth/login`, data);
  console.log(response);
  return response;
};

export const Register = async (
  data: registerFormType
): Promise<AxiosResponse> => {
  const response = await axios.post(`${config.apiUrl}/auth/register`, data);
  return response;
};

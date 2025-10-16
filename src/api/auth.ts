import axios, { type AxiosResponse } from "axios";
import config from "../config/config";
import type { logInFormType } from "../types/authFormTypes";
export const login = async (data: logInFormType): Promise<AxiosResponse> => {
  const respose = await axios.post(`${config.apiUrl}/auth/login`, data);
  return respose
};

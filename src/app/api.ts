import axios, { AxiosPromise } from "axios";
import { BASE_URL } from "./constants";

export const doGetQuotes = (params?: Object): AxiosPromise<any> => {
  return axios({
    method: "GET",
    url: BASE_URL,
    params: params,
  });
};

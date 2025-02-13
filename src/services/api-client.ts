import axios, { AxiosRequestConfig } from "axios";
import React from "react";
export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY
  }
})

class APIClient<T>{
  endpoint: string;

  constructor(endpoint: string){
    this.endpoint = endpoint;
  }
getAll = (config: AxiosRequestConfig) =>{
  return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
}

get = (id: number | string) => {
 return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data)
}

// post = (data: T) => {
// return axiosInstance.post<T>(this.endpoint, data).then(res => res.data)
// }
}

export default APIClient
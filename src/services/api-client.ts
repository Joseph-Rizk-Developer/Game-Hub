import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9c069d9f706247a4b693383c856b9613"
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

post = (data: T) => {
return axiosInstance.post<T>(this.endpoint, data).then(res => res.data)
}
}


// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "9c069d9f706247a4b693383c856b9613",
//   },
// });

export default APIClient
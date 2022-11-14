import axios from "axios";
import { http } from "../../domain/repository/http";

const headers = {
  "Content-type": "application/json",
};

export const httpAxios: http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.get(path, params);
    return response.data as T;
  },

  post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.post(path, params);
    return response.data as T;
  },

  put: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.put(path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  },

  delete: async <T>(
    path: string,
    params?: Record<string, any>,
    config?: any
  ) => {
    const response = await axios.delete(path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  },
};

import axios from "axios";
import { http } from "../../domain/repository/http";

const headers = {
  "Content-type": "application/json",
};

export class httpAxios implements http {
  async get<T>(path: string, params?: Record<string, any>, config?: any) {
    const response = await axios.get(path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  }

  async post<T>(path: string, params?: Record<string, any>, config?: any) {
    const response = await axios.post(path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  }

  async put<T>(path: string, params?: Record<string, any>, config?: any) {
    const response = await axios.put(path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  }

  async delete<T>(path: string, params?: Record<string, any>, config?: any) {
    const response = await axios.delete(path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  }
}

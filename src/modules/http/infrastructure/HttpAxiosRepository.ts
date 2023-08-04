import axios from "axios";

import { HttpRepository } from "../domain/HttpRepository";
import { Http } from "../domain/http";

const headers = {
  "Content-type": "application/json",
};

export const HttpAxiosRepository = (): HttpRepository => {
  return {
    get,
    post,
    put,
    remove,
  };
};

const get = async (myHttp: Http) => {
  const { path, params, config } = myHttp;
  const response = await axios.get(path, params);
  return response.data;
};

const post = async (myHttp: Http) => {
  const { path, params, config } = myHttp;
  const response = await axios.post(path, params);
  return response.data;
};

const put = async (myHttp: Http) => {
  const { path, params, config } = myHttp;
  const response = await axios.put(path, {
    ...config,
    params: params,
    headers,
  });
  return response.data;
};

const remove = async (myHttp: Http) => {
  const { path, params, config } = myHttp;
  const response = await axios.delete(path, {
    ...config,
    params: params,
    headers,
  });
  return response.data;
};
import { login } from "../domain/dto/Login.entity";

import { postHttp } from "../../http/application/postHttp";

import { HttpAxios } from "../../http/infrastructure/HttpAxios";
import { loginAdapter } from "../infrastructure/adapters/Login.adapater";

export const loginService = async (values: login) => {
  const httpRepository = HttpAxios();

  try {
    const formattedValues = loginAdapter(values);
    const res = await postHttp(httpRepository, {
      path: `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/login`,
      params: formattedValues,
    });
    return res;
  } catch (error) {
    return error;
  }
};

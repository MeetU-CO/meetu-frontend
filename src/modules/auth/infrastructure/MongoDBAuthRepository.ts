import { Auth } from "../domain/Auth";
import { AuthRepository } from "../domain/AuthRepository";

import { postHttp } from "../../http/application/postHttp";

import { HttpAxios } from "../../http/infrastructure/HttpAxios";

const httpRepository = HttpAxios();

export const createMongoDBAuthRepository = (): AuthRepository => {
  return {
    login,
    signup,
  };
};

const login = async (auth: Auth) => {
  try {
    const res = await postHttp(httpRepository, {
      path: `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/login`,
      params: auth,
    });
    return res;
  } catch (error) {
    return error;
  }
};

const signup = async (auth: Auth) => {
  try {
    const res = await postHttp(httpRepository, {
      path: `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/signup`,
      params: auth,
    });
    return res;
  } catch (error) {
    return error;
  }
};

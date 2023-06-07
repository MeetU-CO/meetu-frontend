import { signup } from "../../auth/domain/dto/Signup.entity";

import { postHttp } from "../../http/application/postHttp";

import { HttpAxios } from "../../http/infrastructure/HttpAxios";
import { signupAdapter } from "../infrastructure/adapters/Signup.adapter";

export const signupService = async (values: signup) => {
  const httpRepository = HttpAxios();

  try {
    const formattedValues = signupAdapter(values);
    const res = await postHttp(httpRepository, {
      path: `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/signup`,
      params: formattedValues,
    });
    return res;
  } catch (error) {
    return error;
  }
};

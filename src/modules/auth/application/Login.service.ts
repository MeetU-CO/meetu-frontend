import { login } from "../domain/dto/Login.entity";

import { httpAxios } from "../../http/infrastructure/httpAxios";
import { loginAdapter } from "../infrastructure/adapters/Login.adapater";

export const loginService = async (values: login) => {
  try {
    const formattedValues = loginAdapter(values);
    const res = await httpAxios.post(
      `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/login`,
      formattedValues
    );
    return res;
  } catch (error) {
    return error;
  }
};

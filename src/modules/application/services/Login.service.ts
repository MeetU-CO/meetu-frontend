import { login } from "../../domain/entity/Login.entity";
import { loginAdapter } from "../../infraestructure/adapters/Login.adapater";
import { httpAxios } from "../../infraestructure/repository/httpAxios";

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

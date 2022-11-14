import { login } from "../../domain/entity/Login.entity";
import { loginModel } from "../../domain/model/Login.model";

export const loginAdapter = (values: login) => {
  const formattedValues: loginModel = {
    email: values.email,
    password: values.password,
  };

  return formattedValues;
};

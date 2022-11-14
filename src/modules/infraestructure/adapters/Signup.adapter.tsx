import { signup } from "../../domain/entity/Signup.entity";
import { signupModel } from "../../domain/model/Signup.model";

export const signupAdapter = (values: signup) => {
  const formattedValues: signupModel = {
    email: values.email,
    password: values.password,
    name: values.name,
  };

  return formattedValues;
};

import { signup } from "../../../auth/domain/dto/Signup.entity";
import { signupModel } from "../../../auth/domain/model/Signup.model";

export const signupAdapter = (values: signup) => {
  const formattedValues: signupModel = {
    email: values.email,
    password: values.password,
    name: values.name,
  };

  return formattedValues;
};

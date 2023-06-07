import { signup } from "../../auth/domain/dto/Signup.entity";

import { httpAxios } from "../../http/infrastructure/httpAxios";
import { signupAdapter } from "../infrastructure/adapters/Signup.adapter";

export const signupService = async (values: signup) => {
  try {
    const formattedValues = signupAdapter(values);
    const res = await httpAxios.post(
      `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/signup`,
      formattedValues
    );
    return res;
  } catch (error) {
    return error;
  }
};

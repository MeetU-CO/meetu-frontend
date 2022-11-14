import { signup } from "../../domain/entity/Signup.entity";
import { signupAdapter } from "../../infraestructure/adapters/Signup.adapter";
import { httpAxios } from "../../infraestructure/repository/httpAxios";

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

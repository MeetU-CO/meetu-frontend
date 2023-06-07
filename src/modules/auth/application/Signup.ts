import { Auth } from "../domain/Auth";
import { AuthRepository } from "../domain/AuthRepository";

export const signup = (authRepository: AuthRepository, auth: Auth): any => {
  return authRepository.signup(auth);
};

import { Auth } from "../domain/Auth";
import { AuthRepository } from "../domain/AuthRepository";

export const login = (authRepository: AuthRepository, auth: Auth): any => {
  return authRepository.login(auth);
};

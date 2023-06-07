import { CookieRepository } from "../domain/CookieRepository";

export const removeCookie = (
  cookieRepository: CookieRepository,
  name: string
): void => {
  cookieRepository.remove(name);
};

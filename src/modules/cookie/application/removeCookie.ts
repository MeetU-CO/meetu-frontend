import { CookieRepository } from "../domain/CookieRepository";

export const removeCookie = (
  CookieRepository: CookieRepository,
  name: string
): void => {
  CookieRepository.remove(name);
};

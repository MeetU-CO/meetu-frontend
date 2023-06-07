import { Cookie } from "../domain/Cookie";
import { CookieRepository } from "../domain/CookieRepository";

export const addCookie = (
  CookieRepository: CookieRepository,
  cookie: Cookie
): void => {
  CookieRepository.add(cookie);
};

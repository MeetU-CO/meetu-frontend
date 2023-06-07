import { Cookie } from "../domain/Cookie";
import { CookieRepository } from "../domain/CookieRepository";

export const addCookie = (
  cookieRepository: CookieRepository,
  cookie: Cookie
): void => {
  cookieRepository.add(cookie);
};

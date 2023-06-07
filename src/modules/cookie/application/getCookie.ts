import { CookieRepository } from "../domain/CookieRepository";

export const getCookie = (
  cookieRepository: CookieRepository,
  name: string
): string => {
  return cookieRepository.get(name);
};

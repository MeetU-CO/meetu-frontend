import { CookieRepository } from "../domain/CookieRepository";

export const getCookie = (
  CookieRepository: CookieRepository,
  name: string
): string => {
  return CookieRepository.get(name);
};

import Cookies from "universal-cookie";

import { Cookie } from "../domain/Cookie";
import { CookieRepository } from "../domain/CookieRepository";

const cookie = new Cookies();

export const createUniversalCookieRepository = (): CookieRepository => {
  return {
    add,
    get,
    remove,
  };
};

const add = (myCookie: Cookie) => {
  const { data, name } = myCookie;
  var expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 1800 * 1000);
  cookie.set(name, JSON.stringify(data), {
    path: "/",
    expires: expirationDate,
  });
};

const get = (name: string): string => {
  return cookie.get(name);
};

const remove = (name: string) => {
  cookie.remove(name, { path: "/" });
};

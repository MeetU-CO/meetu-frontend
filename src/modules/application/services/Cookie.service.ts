import Cookies from "universal-cookie";
const cookie = new Cookies();

export const addCookie = (data: string, name: string) => {
  var expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 1800 * 1000);
  cookie.set(name, JSON.stringify(data), {
    path: "/",
    expires: expirationDate,
  });
};

export const getCookie = (name: string) => {
  return cookie.get(name);
};

export const deleteCookie = (name: string) => {
  cookie.remove(name, { path: "/" });
};

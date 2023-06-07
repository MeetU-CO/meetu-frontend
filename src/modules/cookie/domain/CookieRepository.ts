import { Cookie } from "./Cookie.js";

export interface CookieRepository {
  add: (cookie: Cookie) => void;
  get: (name: string) => string;
  remove: (name: string) => void;
}

import { Http } from "./Http";

export interface HttpRepository {
  get: (data: Http) => Promise<any>;
  post: (data: Http) => Promise<any>;
  put: (data: Http) => Promise<any>;
  remove: (data: Http) => Promise<any>;
}

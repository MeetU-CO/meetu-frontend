import { Http } from "../domain/Http";
import { HttpRepository } from "../domain/HttpRepository";

export const postHttp = (httpRepository: HttpRepository, http: Http): any => {
  return httpRepository.post(http);
};

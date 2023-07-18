import { HttpRepository } from "../domain/HttpRepository";
import { Http } from "../domain/http";

export const postHttp = (httpRepository: HttpRepository, http: Http): any => {
  return httpRepository.post(http);
};

import { decodeToken, isExpired } from "react-jwt";

import { Token } from "../domain/Token";
import { TokenRepository } from "../domain/TokenRepository";

export const ReactJWTToken = (): TokenRepository => {
  return {
    decode,
    isExpiredToken,
  };
};

const decode = (token: string) => {
  const decodedToken: Token = decodeToken(token)!;
  return decodedToken;
};

const isExpiredToken = (token: string) => {
  const isTokenExpired: boolean = isExpired(token)!;
  return isTokenExpired;
};

import { decodeToken } from "react-jwt";

import { Token } from "../domain/Token";

export const tokenHandler = (token: string) => {
  const decodedToken: Token = decodeToken(token)!;
  return decodedToken;
};

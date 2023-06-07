import { TokenRepository } from "../domain/TokenRepository";

export const decodeToken = (
  tokenRepository: TokenRepository,
  token: string
) => {
  return tokenRepository.decode(token);
};

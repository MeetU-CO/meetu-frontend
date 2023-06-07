import { Token } from "./Token";

export interface TokenRepository {
  decode: (token: string) => Token;
  isExpiredToken: (token: string) => boolean;
}

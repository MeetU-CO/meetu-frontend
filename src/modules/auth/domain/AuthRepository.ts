import { Auth } from "./Auth";

export interface AuthRepository {
  login: (auth: Auth) => Promise<void>;
  signup: (auth: Auth) => Promise<void>;
}

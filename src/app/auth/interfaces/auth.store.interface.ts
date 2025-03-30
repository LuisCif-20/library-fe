import { User } from "./user.interface";

export enum AuthStatus {
  CHECKING,
  AUTHENTICATED,
  NOT_AUTHENTICATED
}

export interface AuthState {
  accessToken:  string | null;
  authStatus:   AuthStatus;
  user:         User | null;
}

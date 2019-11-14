import * as AuthTypes from "./types";

export const AuthenticationSetAuth = (payload: boolean): AuthTypes.AuthActionTypes => ({
  type: AuthTypes.AUTHENTICATION_SET_AUTH,
  payload,
});

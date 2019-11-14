import * as AuthTypes from "./types";

export const AuthenticationSetAuth = (payload: any) => ({
  type: AuthTypes.AUTHENTICATION_SET_AUTH,
  payload,
});

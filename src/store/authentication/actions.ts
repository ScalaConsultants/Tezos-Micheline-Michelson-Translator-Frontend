import * as AuthTypes from "./types";

export const AuthenticationLogin = (data: AuthTypes.authCredentials): AuthTypes.AuthActionTypes => ({
  type: AuthTypes.AUTHENTICATION_LOGIN,
  payload: data,
});

export const AuthenticationSuccess = (token: string): AuthTypes.AuthActionTypes => ({
  type: AuthTypes.AUTHENTICATION_SUCCESS,
  token: token,
});
export const AuthenticationFail = (status: string, error: any): AuthTypes.AuthActionTypes => ({
  type: AuthTypes.AUTHENTICATION_FAIL,
  status: status,
  error: error,
});

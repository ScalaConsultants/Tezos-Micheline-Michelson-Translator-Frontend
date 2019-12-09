export const AUTHENTICATION_SET_AUTH = 'AUTHENTICATION_SET_AUTH';
export const AUTHENTICATION_LOGIN = 'AUTHENTICATION_LOGIN';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAIL = 'AUTHENTICATION_FAIL';


export type authCredentials = {
  username: string,
  password: string,
};

export type AuthenticationState = {
  token: string;
  isLogged: string;
};

export interface IAuthenticationLogin {
  type: typeof AUTHENTICATION_LOGIN,
  payload: authCredentials,
};
export interface IAuthenticationSuccess {
  type: typeof AUTHENTICATION_SUCCESS,
  token: string,
};
export interface IAuthenticationFail {
  type: typeof AUTHENTICATION_FAIL,
  error: string,
  status: string
};

export type AuthActionTypes =
  | IAuthenticationLogin
  | IAuthenticationSuccess
  | IAuthenticationFail;
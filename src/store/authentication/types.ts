export const AUTHENTICATION_SET_AUTH = 'AUTHENTICATION_SET_AUTH';

export type authState = {
    loggedIn: boolean,
}

export interface IAuthenticationSetAuth {
    type: typeof AUTHENTICATION_SET_AUTH,
    payload: boolean,
}

export type AuthActionTypes = IAuthenticationSetAuth;
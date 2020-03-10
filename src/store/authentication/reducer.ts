import * as AuthTypes from "./types";

const authenticationInitialState = {
  isLogged: false,
  isError:  false,
  token: "",
};

export const authenticationReducer = (state: any = authenticationInitialState, action: any) => {
  switch (action.type) {
    case AuthTypes.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isError: false,
        token: action.token,
      };
    case AuthTypes.AUTHENTICATION_FAIL:
      return {
        ...state,
        isLogged: false,
        isError: true,
      };
    case AuthTypes.AUTHENTICATION_LOGIN:
      return {
        ...state,
      };
    case AuthTypes.AUTHENTICATION_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

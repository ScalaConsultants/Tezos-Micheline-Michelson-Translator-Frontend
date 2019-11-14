import * as AuthTypes from "./types";

const authenticationInitialState = {
  loggedIn: false,
};

export const authenticationReducer = (state: any = authenticationInitialState, action: any) => {
  switch (action.type) {
    case AuthTypes.AUTHENTICATION_SET_AUTH:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

import * as AuthTypes from './types';

const authenticationInitialState = {
    isLogged: false,
    token: ""
}

export const authenticationReducer = (
    state: any = authenticationInitialState,
    action: any,
) => {
    switch (action.type) {
        case AuthTypes.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                isLogged: true,
                token: action.token
            };
        case AuthTypes.AUTHENTICATION_FAIL:
            return {
                ...state,
                isLogged: false,
            };
        case AuthTypes.AUTHENTICATION_LOGIN:
            return {
                ...state,
            };
        default:
            return state;
    }
}
import { put, call } from "redux-saga/effects";
import * as authenticationActions from "./actions";
import * as authenticationTypes from "./types";
import {getLoginToken, setLoginToken} from "../../helpers/sessionHandler";
import AuthenticationService from "../../services/authentication.service";

export function* doCheckAuth() {
  const token = getLoginToken();
  // We make a call to backend and confirm if the token is correct. Then we set auth.
  token && (yield put(authenticationActions.AuthenticationSuccess(token)));
}

export function* doLogin(action: authenticationTypes.IAuthenticationLogin) {
  const authenticationService = new AuthenticationService();
  const response = yield call(authenticationService.login, action.payload);

  if (response.status === 200) {
    yield put(authenticationActions.AuthenticationSuccess(response.data));
    setLoginToken(response.data);
  } else {
    yield put(authenticationActions.AuthenticationFail(response.status, response.data));
  }
}

export function* doLogout() {
  const authenticationService = new AuthenticationService();
  yield call(authenticationService.logout);
}

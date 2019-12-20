import { put, call } from "redux-saga/effects";
import * as authenticationActions from "./actions";
import * as authenticationTypes from "./types";
import { setLoginToken } from "../../helpers/sessionHandler";
import AuthenticationService from "../../services/authentication.service";

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

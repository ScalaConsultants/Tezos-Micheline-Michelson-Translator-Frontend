import { put, call } from "redux-saga/effects";
import * as authenticationActions from "./actions";
import * as authenticationTypes from "./types";
import { setLoginToken } from "../../helpers/sessionHandler";

const authenticationRequest = (data: any) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(`${process.env.REACT_APP_API_URL}/v1/login`, options)
    .then(async response => {
      return { status: response.status, data: response.status === 200 ? await response.json() : null };
    })
    .catch(error => {
      throw error;
    });
};

export function* doLogin(action: authenticationTypes.IAuthenticationLogin) {
  const response = yield call(authenticationRequest, action.payload);

  if (response.status === 200) {
    yield put(authenticationActions.AuthenticationSuccess(response.data));
    setLoginToken(response.data);
  } else {
    yield put(authenticationActions.AuthenticationFail(response.status, response.data));
  }
}

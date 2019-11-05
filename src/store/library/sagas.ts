import { put, call } from 'redux-saga/effects';
import * as libraryActions from './actions';

export function* doLibraryFetch() {
  const response = yield call(libraryFetchRequest);

  if (response.status === 200) {
    yield put(libraryActions.LibrarySet(response.json));
  }
}

const libraryFetchRequest = () => {
  let options = {
    method: 'GET',
  };

  return fetch(process.env.REACT_APP_API_URL + '/v1/translations', options)
    .then(async response => {
      return { status: response.status, json: await response.json() };
    })
    .catch(error => {
      throw error;
    });
};

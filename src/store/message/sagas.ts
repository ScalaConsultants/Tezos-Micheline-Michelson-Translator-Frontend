import { put, call } from "redux-saga/effects";
import * as messageActions from "./actions";
import * as MessageTypes from "./types";
import MessageService from "../../services/message.service";

export function* doMessageSend(action: MessageTypes.IMessageSend) {
  const messageService = new MessageService();
  yield put(messageActions.MessageSetLoading(true));
  const response = yield call(messageService.send, action.message, action.captcha);
  yield put(messageActions.MessageSetLoading(false));

  if (response.status === 200) {
    yield put(messageActions.MessageSetError(false));
    // yield put(messageActions.());
  }
}

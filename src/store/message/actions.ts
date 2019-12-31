import * as MessageTypes from "./types";

export const MessageSend = (payload: MessageTypes.MessageState, captcha: string): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_SEND,
  message: payload,
  captcha,
});

export const MessageSet = (payload: MessageTypes.MessageState): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_SET,
  message: payload,
});

export const MessageFlush = (): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_FLUSH,
});

export const MessageSetLoading = (isLoading: boolean): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_SET_LOADING,
  isLoading,
});

export const MessageSetError = (isError: boolean): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_SET_ERROR,
  isError,
});

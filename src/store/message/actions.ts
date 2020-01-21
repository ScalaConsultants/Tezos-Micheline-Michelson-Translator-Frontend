import * as MessageTypes from "./types";

export const MessageSend = (message: MessageTypes.MessageState, captcha: string): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_SEND,
  message,
  captcha,
});

export const MessageSet = (message: MessageTypes.MessageState): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_SET,
  message,
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

import * as MessageTypes from "./types";

export const MessageSend = (message: MessageTypes.MessageState, captcha: string): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_SEND,
  message,
  captcha,
});

export const MessageSetLoading = (isLoading: boolean): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_SET_LOADING,
  isLoading,
});

export const MessageSetError = (isError: boolean): MessageTypes.MessageActionTypes => ({
  type: MessageTypes.MESSAGE_SET_ERROR,
  isError,
});

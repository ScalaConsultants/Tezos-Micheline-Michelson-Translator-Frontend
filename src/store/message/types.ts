export type MessageState = {
  captcha?: string;
  isError: boolean | null;
  isLoading: boolean;
};

export const MESSAGE_SEND = "MESSAGE_SEND";
export const MESSAGE_FLUSH = "MESSAGE_FLUSH";
export const MESSAGE_SET_LOADING = "MESSAGE_SET_PENDING";
export const MESSAGE_SET_ERROR = "MESSAGE_SET_ERROR";

export type MessageAction = {
  type: string;
  message: MessageState;
  isLoading: boolean;
  isError: boolean;
};

export interface IMessageGlobalState {
  message: MessageState;
}

export interface IMessageSend {
  type: typeof MESSAGE_SEND;
  message: MessageState;
  captcha: string;
}

export interface IMessageSetLoading {
  type: typeof MESSAGE_SET_LOADING;
  isLoading: boolean;
}

export interface IMessageSetError {
  type: typeof MESSAGE_SET_ERROR;
  isError: boolean;
}

export type MessageActionTypes = IMessageSend | IMessageSetLoading | IMessageSetError;

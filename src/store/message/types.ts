export type MessageState = {
  name: string;
  phone: string;
  email: string;
  content: string;
  captcha?: string;
  isError: boolean | null;
  isLoading: boolean;
};

export const MESSAGE_SEND = "MESSAGE_SEND";
export const MESSAGE_SET = "MESSAGE_SET";
export const MESSAGE_FLUSH = "MESSAGE_FLUSH";
export const MESSAGE_SET_LOADING = "MESSAGE_SET_PENDING";
export const MESSAGE_SET_ERROR = "MESSAGE_SET_ERROR";

// export type MessageState = Message;

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

export interface IMessageSet {
  type: typeof MESSAGE_SET;
  message: MessageState;
}

export interface IMessageFlush {
  type: typeof MESSAGE_FLUSH;
}

export interface IMessageSetLoading {
  type: typeof MESSAGE_SET_LOADING;
  isLoading: boolean;
}

export interface IMessageSetError {
  type: typeof MESSAGE_SET_ERROR;
  isError: boolean;
}

export type MessageActionTypes = IMessageSend | IMessageSet | IMessageFlush | IMessageSetLoading | IMessageSetError;

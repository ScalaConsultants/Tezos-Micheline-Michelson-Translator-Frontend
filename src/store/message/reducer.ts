import * as MessageTypes from "./types";

const messageInitState: MessageTypes.MessageState = {
  isError: null,
  isLoading: false,
};

export const messageReducer = (
  state: MessageTypes.MessageState = messageInitState,
  action: MessageTypes.MessageAction,
) => {
  switch (action.type) {
    case MessageTypes.MESSAGE_SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case MessageTypes.MESSAGE_SET_ERROR:
      return {
        ...(action.isError === false ? messageInitState : state),
        isError: action.isError,
      };
    case MessageTypes.MESSAGE_FLUSH:
      return messageInitState;
    default:
      return state;
  }
};

import * as MessageTypes from "../store/message/types";

export default class MessageService {
  private apiUrl: string;

  private endpoint: string;

  constructor() {
    this.apiUrl = `${process.env.REACT_APP_API_URL}/v1`;
    this.endpoint = "/message";
  }

  send = (message: MessageTypes.MessageState) => {
    const body = JSON.stringify({
      name: message.name,
      phone: message.phone,
      email: message.email,
      content: message.content,
    });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };

    return fetch(`${this.apiUrl}${this.endpoint}`, options)
      .then(async response => {
        return { status: response.status, text: await response.text() };
      })
      .catch(error => {
        throw error;
      });
  };
}

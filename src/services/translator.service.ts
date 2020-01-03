export default class TranslatorService {
  private apiUrl: string;

  private michelsonToMichelineUrl: string;

  private michelineToMichelsonUrl: string;

  private libraryUrl: string;

  constructor() {
    this.apiUrl = `${process.env.REACT_APP_API_URL}/v1`;
    this.michelsonToMichelineUrl = "/translate/from/michelson/to/micheline";
    this.michelineToMichelsonUrl = "/translate/from/micheline/to/michelson";
    this.libraryUrl = "/library";
  }

  michelsonToMicheline = (payload: string) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: payload,
    };

    return fetch(`${this.apiUrl}${this.michelsonToMichelineUrl}`, options)
      .then(async response => {
        return { status: response.status, text: response.status === 200 ? await response.text() : null };
      })
      .catch(error => {
        console.log(error);
      });
  };

  michelineToMichelson = (payload: string) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: payload,
    };

    return fetch(`${this.apiUrl}${this.michelineToMichelsonUrl}`, options)
      .then(async response => {
        return { status: response.status, text: response.status === 200 ? await response.text() : null };
      })
      .catch(error => {
        console.log(error);
      });
  };

  publish = (payload: any, captcha: string) => {
    const { isEmail = "", email = "", ...body } = { ...payload };
    if (!!isEmail) {
      body.email = email;
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        CAPTCHA: captcha,
      },
      body: JSON.stringify(body),
    };

    return fetch(`${this.apiUrl}${this.libraryUrl}`, options)
      .then(async response => {
        return { status: response.status, text: await response.text() };
      })
      .catch(error => {
        throw error;
      });
  };
}

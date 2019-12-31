export default class AuthenticationService {
  private apiUrl: string;

  private loginUrl: string;

  constructor() {
    this.apiUrl = `${process.env.REACT_APP_API_URL}/v1`;
    this.loginUrl = "/login";
  }

  login = (data: any) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    return fetch(`${this.apiUrl}${this.loginUrl}`, options)
      .then(async response => {
        return { status: response.status, data: response.status === 200 ? await response.json() : null };
      })
      .catch(error => {
        throw error;
      });
  };
}

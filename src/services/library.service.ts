export default class LibraryService {
  private apiUrl: string;

  private libraryUrl: string;

  constructor() {
    this.apiUrl = `${process.env.REACT_APP_API_URL}/v1`;
    this.libraryUrl = "/library";
  }

  get = () => {
    const options = {
      method: "GET",
    };

    return fetch(`${process.env.REACT_APP_API_URL}/v1/library`, options)
      .then(async response => {
        return { status: response.status, json: response.status === 200 ? await response.json() : [] };
      })
      .catch(error => {
        throw error;
      });
  };
}

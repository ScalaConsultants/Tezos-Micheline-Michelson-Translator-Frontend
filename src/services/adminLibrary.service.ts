import { getLoginToken } from "../helpers/sessionHandler";
import * as adminLibraryTypes from "../store/adminLibrary/types";

export default class AdminLibraryService {
  private apiUrl: string;

  private libraryUrl: string;

  private token: string;

  constructor() {
    this.apiUrl = `${process.env.REACT_APP_API_URL}/v1`;
    this.libraryUrl = "/library";
    this.token = getLoginToken() || "";
  }

  get = () => {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(`${process.env.REACT_APP_API_URL}/v1/library?limit=100`, options)
      .then(async response => {
        return { status: response.status, json: await response.json() };
      })
      .catch(error => {
        throw error;
      });
  };

  setStatus = (item: string, status: adminLibraryTypes.adminLibraryItemStatusType) => {
    const options: RequestInit = {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${this.token}`
      },
    };

    return fetch(
      `${process.env.REACT_APP_API_URL}/v1/library/${item}?status=${status}`,
      options,
    )
      .then(async response => {
        return { status: response.status, data: await response.text() };
      })
      .catch(error => {
        throw error;
      });
  };

  removeItem = (item: string) => {
    const options = {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${this.token}`
      },
    };

    return fetch(`${process.env.REACT_APP_API_URL}/v1/library/${item}`, options)
      .then(async response => {
        return { status: response.status, data: await response.text() };
      })
      .catch(error => {
        throw error;
      });
  };
}

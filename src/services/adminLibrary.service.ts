import { getLoginToken } from "../helpers/sessionHandler";
import * as adminLibraryTypes from "../store/adminLibrary/types";

export default class AdminLibraryService {
  private apiUrl: string;

  private libraryUrl: string;

  constructor() {
    this.apiUrl = `${process.env.REACT_APP_API_URL}/v1`;
    this.libraryUrl = "/library";
  }

  get = () => {
    const options: RequestInit = {
      method: "GET",
    };

    return fetch(`${process.env.REACT_APP_API_URL}/v1/library?limit=100&access_token=${getLoginToken()}`, options)
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
    };

    return fetch(
      `${process.env.REACT_APP_API_URL}/v1/library?uid=${item}&status=${status}&access_token=${getLoginToken()}`,
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
    };

    return fetch(`${process.env.REACT_APP_API_URL}/v1/library?uid=${item}&access_token=${getLoginToken()}`, options)
      .then(async response => {
        return { status: response.status, data: await response.text() };
      })
      .catch(error => {
        throw error;
      });
  };
}

import {HttpClient} from "@angular/common/http";

export abstract class ApiRepository {
  private _apiUrl = 'http://sae3-a-01-api.alwaysdata.net';

  constructor(private _http: HttpClient) {}
  get apiUrl(): string {
    return this._apiUrl;
  }

  get http(): HttpClient {
    return this._http;
  }
}

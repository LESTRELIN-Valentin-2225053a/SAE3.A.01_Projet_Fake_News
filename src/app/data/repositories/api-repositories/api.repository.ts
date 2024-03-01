import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export abstract class ApiRepository {
  private _apiUrl = 'https://sae3-a-01.alwaysdata.net/api';

  constructor(private _http: HttpClient) {}
  get apiUrl(): string {
    return this._apiUrl;
  }

  get http(): HttpClient {
    return this._http;
  }
}

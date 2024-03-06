import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

/**
 * Abstract class representing a repository for API-related operations.
 * Provides basic functionality for accessing the API base URL and HTTP client.
 */
@Injectable({
  providedIn: 'root'
})
export abstract class ApiRepository {
  /** The base URL of the API. */
  private _apiUrl = 'http://localhost:8000';

  /**
   * Creates an instance of ApiRepository.
   * @param _http The HttpClient instance to use for HTTP requests.
   */
  constructor(private _http: HttpClient) {}

  /**
   * Gets the base URL of the API.
   * @returns The base URL of the API.
   */
  get apiUrl(): string {
    return this._apiUrl;
  }

  /**
   * Gets the HttpClient instance used for HTTP requests.
   * @returns The HttpClient instance.
   */
  get http(): HttpClient {
    return this._http;
  }
}

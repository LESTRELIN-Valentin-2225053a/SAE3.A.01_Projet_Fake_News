import {ApiRepository} from "../api.repository";
import {UserRepository} from "../../../../core/repositories/user.repository";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {UserModel} from "../../../../core/domain/user.model";
import {UserApiEntity} from "./user-api-entity";
import {UserApiRepositoryMapper} from "./user-api-repository.mapper";
import {Injectable} from "@angular/core";

/**
 * Repository responsible for interacting with the user-related API endpoints.
 * Handles operations such as user login, registration, logout, and retrieval of user information.
 */
@Injectable({
  providedIn: 'root'
})
export class UserApiRepository extends ApiRepository implements UserRepository{

  /** Instance of the mapper for mapping user API entities to user domain models and vice versa. */
  mapper = new UserApiRepositoryMapper();

  /**
   * Retrieves the CSRF token required for authentication.
   * @returns An observable that resolves with the CSRF token.
   */
  getCsrfToken(){
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`,{withCredentials: true});
  }

  /**
   * Handles errors occurring during registration and login processes.
   * @returns An observable that resolves with undefined.
   */
  private handleRegisterAndLoginError() {
    return of(undefined);
  }

  /**
   * @inheritDoc
   */
  login(mail: string, password: string){
    const credentials = {
      email: mail,
      password: password,
    };
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.post<UserApiEntity>(`${this.apiUrl}/login`, credentials,{withCredentials: true}).pipe(
          map(this.mapper.mapFrom),
          catchError(this.handleRegisterAndLoginError)
        )
      )
    );
  }

  /**
   * @inheritDoc
   */
  logout(): Observable<boolean> {
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.post(`${this.apiUrl}/logout`, {},{withCredentials: true}).pipe(
          map(() => true),
          catchError(() => { return of(false);})
        )
      )
    );
  }

  /**
   * @inheritDoc
   */
  register(name: string, email: string, password: string): Observable<UserModel | undefined> {
    const credentials = {
      name: name,
      email: email,
      password: password,
    };
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.post<UserApiEntity>(`${this.apiUrl}/register`, credentials,{withCredentials: true}).pipe(
          map(this.mapper.mapFrom),
          catchError(this.handleRegisterAndLoginError)
        )
      )
    );
  }

  /**
   * @inheritDoc
   */
  getLoggedUser(): Observable<UserModel | undefined> {
    return this.http.get<UserApiEntity>(`${this.apiUrl}/user`,{withCredentials: true}).pipe(
      map(this.mapper.mapFrom),
      catchError(this.handleRegisterAndLoginError)
    );
  }

  /**
   * @inheritDoc
   */
  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserApiEntity[]>(`${this.apiUrl}/user/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserApiEntity>(`${this.apiUrl}/user/${id}`).pipe(map(this.mapper.mapFrom));
  }
}

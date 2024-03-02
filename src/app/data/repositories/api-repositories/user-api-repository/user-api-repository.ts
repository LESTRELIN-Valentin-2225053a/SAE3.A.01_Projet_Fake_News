import {ApiRepository} from "../api.repository";
import {UserRepository} from "../../../../core/repositories/user.repository";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {UserModel} from "../../../../core/domain/user.model";
import {UserApiEntity} from "./user-api-entity";
import {UserApiRepositoryMapper} from "./user-api-repository.mapper";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserApiRepository extends ApiRepository implements UserRepository{
  mapper = new UserApiRepositoryMapper();

  getCsrfToken(){
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`,{withCredentials: true});
  }

  private handleRegisterAndLoginError() {
    return of(undefined);
  }

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

  getLoggedUser(): Observable<UserModel | undefined> {
    return this.http.get<UserApiEntity>(`${this.apiUrl}/user`,{withCredentials: true}).pipe(
      map(this.mapper.mapFrom),
      catchError(this.handleRegisterAndLoginError)
    );
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserApiEntity[]>(`${this.apiUrl}/user/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserApiEntity>(`${this.apiUrl}/user/${id}`).pipe(map(this.mapper.mapFrom));
  }
}

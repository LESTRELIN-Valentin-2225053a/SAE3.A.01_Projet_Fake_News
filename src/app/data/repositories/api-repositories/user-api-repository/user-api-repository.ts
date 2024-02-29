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
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`);
  }

  getAllUsers(): Observable<UserModel[]> {
    return of();
  }

  getUserById(id: number): Observable<UserModel> {
    return of();
  }

  private handleError() {
    return of(undefined);
  }

  login(mail: string, password: string){
    const credentials = {
      email: mail,
      password: password,
    };
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.post<UserApiEntity>(`http://localhost:8000/api/login`, credentials).pipe(
          map(this.mapper.mapFrom),
          catchError(this.handleError)
        )
      )
    );
  }

  logout(): boolean {
    return false;
  }

  register(name: string, mail: string, password: string): Observable<UserModel> | false {
    return of();
  }
}

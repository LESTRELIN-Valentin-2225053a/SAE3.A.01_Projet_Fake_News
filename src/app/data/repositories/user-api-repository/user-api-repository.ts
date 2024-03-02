import {ApiRepository} from "../api.repository";
import {UserRepository} from "../../../core/repositories/user.repository";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {UserModel} from "../../../core/domain/user.model";
import {UserApiEntity} from "./user-api-entity";
import {UserApiRepositoryMapper} from "./user-api-repository.mapper";
import {Injectable} from "@angular/core";
import {HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserApiRepository extends ApiRepository implements UserRepository{

  mapper = new UserApiRepositoryMapper();

  getCsrfToken(){
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`);
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http
      .get<UserApiEntity[]>(`${this.apiUrl}/user/all`)
      .pipe(map(this.mapper.mapFromList));
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
        this.http.post<UserApiEntity>(`http://localhost:8000/login`, credentials).pipe(
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

  checkAdminStatus(): boolean {
    let isAdmin = false;
    this.http.get<HttpResponse<any>>(`${this.apiUrl}/admin/checkIsAdmin`)
      .subscribe(response => {
        isAdmin = response.status === 204;
      });
    return isAdmin;
  }
  blockUser(id: number): boolean {
    let isBlocked = false;
    this.http.put<HttpResponse<any>>(`${this.apiUrl}/admin/user/block/${id}`, {})
      .subscribe(response => {
        isBlocked = response.status === 200;
      });
    return isBlocked;
  }
  unblockUser(id: number): boolean {
    let isUnblocked = false;
    this.http.put<HttpResponse<any>>(`${this.apiUrl}/admin/user/unblock/${id}`, {})
      .subscribe(response => {
        isUnblocked = response.status === 200;
      });
    return isUnblocked;
  }
  deleteUser(id: number): boolean {
    let isDeleted = false;
    this.http.put<HttpResponse<any>>(`${this.apiUrl}/admin/user/delete/${id}`, {})
      .subscribe(response => {
        isDeleted = response.status === 200;
      });
    return isDeleted;
  }
  promoteUser(id: number): boolean {
    let isPromoted = false;
    this.http.put<HttpResponse<any>>(`${this.apiUrl}/admin/user/promote/${id}`, {})
      .subscribe(response => {
        isPromoted = response.status === 200;
      });
    return isPromoted;
  }
}

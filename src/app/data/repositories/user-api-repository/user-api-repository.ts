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
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`, {withCredentials: true});
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
        this.http.post<UserApiEntity>(`http://localhost:8000/login`, credentials, {withCredentials: true}).pipe(
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
    this.http.get<HttpResponse<any>>(`${this.apiUrl}/admin/checkIsAdmin`, {withCredentials: true})
      .subscribe(response => {
        isAdmin = response.status === 204;
      });
    return isAdmin;
  }
  blockUser(id: number): Observable<boolean> {
    return this.http.put<HttpResponse<any>>(`${this.apiUrl}/admin/user/block/${id}`, {}, {withCredentials: true})
      .pipe(map(response => response.status === 204));
  }
  unblockUser(id: number): Observable<boolean> {
    return this.http.put<HttpResponse<any>>(`${this.apiUrl}/admin/user/unblock/${id}`, {}, {withCredentials: true})
      .pipe(map(response => response.status === 204));
  }
  deleteUser(id: number): Observable<boolean> {
    return this.http.delete<HttpResponse<any>>(`${this.apiUrl}/admin/user/delete/${id}`, {withCredentials: true})
      .pipe(map(response => response.status === 204));
  }
  promoteUser(id: number): Observable<boolean> {
    return this.http.put<HttpResponse<any>>(`${this.apiUrl}/admin/user/promote/${id}`, {}, {withCredentials: true})
      .pipe(map(response => response.status === 204));
  }

  getLoggedUser(): Observable<UserModel | undefined> {
    return this.http.get<UserApiEntity>(`${this.apiUrl}/user`,{withCredentials: true})
      .pipe(map(this.mapper.mapFrom));
  }
}

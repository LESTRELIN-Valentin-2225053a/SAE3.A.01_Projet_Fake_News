import {Observable} from "rxjs";
import {UserModel} from "../domain/user.model";

export interface UserRepository {
  login() : Observable<UserModel> | false;
  register() : Observable<UserModel> | false;
  logout() : boolean;
  getAllUsers() : Observable<UserModel[]>;
  getUserById(id : number): Observable<UserModel>;
}

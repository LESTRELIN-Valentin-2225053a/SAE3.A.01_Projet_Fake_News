import {Observable} from "rxjs";
import {UserModel} from "../domain/user.model";

export abstract class UserRepository {
  abstract login() : Observable<UserModel> | false;
  abstract register() : Observable<UserModel> | false;
  abstract logout() : boolean;
  abstract getAllUsers() : Observable<UserModel[]>;
  abstract getUserById(id : number): Observable<UserModel>;
}

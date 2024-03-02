import {Observable} from "rxjs";
import {UserModel} from "../domain/user.model";

export abstract class UserRepository {
  abstract login(email: string, password: string) : Observable<UserModel | undefined>;
  abstract register(name : string, email : string, password : string,) : Observable<UserModel | undefined>;
  abstract logout() : Observable<boolean>;
  abstract getLoggedUser() : Observable<UserModel | undefined>;
  abstract getAllUsers() : Observable<UserModel[]>;
  abstract getUserById(id : number): Observable<UserModel>;
}

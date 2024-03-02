import {Observable} from "rxjs";
import {UserModel} from "../domain/user.model";

export abstract class UserRepository {
  abstract login(mail: string, password: string) : Observable<UserModel | undefined>;
  abstract register(name : string, mail : string, password : string,) : Observable<UserModel> | false;
  abstract logout() : boolean;
  abstract getAllUsers() : Observable<UserModel[]>;
  abstract getUserById(id : number): Observable<UserModel>;
  abstract checkAdminStatus() : boolean;
  abstract blockUser(id : number) : boolean;
  abstract unblockUser(id : number) : boolean;
  abstract deleteUser(id : number) : boolean;
  abstract promoteUser(id : number) : boolean;
}

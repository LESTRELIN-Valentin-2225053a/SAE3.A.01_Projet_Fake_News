import {Injectable} from "@angular/core";
import {UserRepository} from "../repositories/user.repository";
import {UserModel} from "../domain/user.model";
import {Observable} from "rxjs";


@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private userRepository: UserRepository) {}

  getAllUsers(): Observable<UserModel[]>{
    return this.userRepository.getAllUsers();
  }
}

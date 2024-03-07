import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserRepository} from "../repositories/user.repository";
import {UserModel} from "../domain/user.model";


@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private userRepository: UserRepository) {}

  getAllUsers(): Observable<UserModel[]>{
    return this.userRepository.getAllUsers();
  }
}

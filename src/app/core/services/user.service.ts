import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserRepository} from "../repositories/user.repository";
import {UserModel} from "../domain/user.model";

/**
 * The UserService provides functionality related to users in the application.
 * It interacts with a UserRepository to perform user-related operations.
 */
@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private userRepository: UserRepository) {}

  /**
   * Retrieves all users.
   * @returns An observable of an array of user models.
   */
  getAllUsers(): Observable<UserModel[]>{
    return this.userRepository.getAllUsers();
  }
}

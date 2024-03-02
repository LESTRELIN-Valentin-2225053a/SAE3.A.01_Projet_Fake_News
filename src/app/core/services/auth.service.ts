import { Injectable } from '@angular/core';
import {UserRepository} from "../repositories/user.repository";
import {UserModel} from "../domain/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userRepository : UserRepository) {}

  register(name: string, mail: string, password: string) : Observable<UserModel | undefined> {
    return this.userRepository.register(name, mail, password);
  }

  login(mail: string, password: string) : Observable<UserModel | undefined> {
    return this.userRepository.login(mail, password);
  }
}

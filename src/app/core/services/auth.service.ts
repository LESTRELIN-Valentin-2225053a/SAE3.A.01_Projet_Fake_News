import { Injectable } from '@angular/core';
import {UserRepository} from "../repositories/user.repository";
import {UserModel} from "../domain/user.model";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private userRepository : UserRepository) {
    this.userRepository.getLoggedUser().pipe(tap(user => console.log(user)))
      .subscribe(user => this.isLoggedInSubject.next(user !== undefined));
  }

  register(name: string, mail: string, password: string) : Observable<UserModel | undefined> {
    return this.userRepository.register(name, mail, password);
  }

  login(mail: string, password: string) : Observable<UserModel | undefined> {
    return this.userRepository.login(mail, password).pipe(
      tap(user => this.isLoggedInSubject.next(user !== undefined)) // Notify observers when logged in
    );
  }

  logout() : Observable<boolean> {
    return this.userRepository.logout().pipe(
      tap(() => this.isLoggedInSubject.next(false)) // Notify observers when logged out
    );
  }

  isLogged() : Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}

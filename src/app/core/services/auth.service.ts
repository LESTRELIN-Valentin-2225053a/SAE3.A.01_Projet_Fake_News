import { Injectable } from '@angular/core';
import {UserRepository} from "../repositories/user.repository";
import {UserModel} from "../domain/user.model";
import {BehaviorSubject, Observable, tap} from "rxjs";

/**
 * The AuthService provides authentication functionality in the application,
 * allowing users to register, log in, and log out. It interacts with a UserRepository
 * to perform user-related operations.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * A BehaviorSubject representing the authentication status.
   * True if the user is logged in, false otherwise.
   */
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isAdminInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private userRepository : UserRepository) {
    this.userRepository.getLoggedUser().pipe(tap(user => console.log(user)))
      .subscribe(user => {
        this.isLoggedInSubject.next(user !== undefined);
        this.userRepository.checkAdminStatus().pipe(tap(isAdmin => console.log(isAdmin))).subscribe(this.isAdminInSubject);
      });
  }

  /**
   * Registers a new user.
   * @param name The name of the user.
   * @param mail The email of the user.
   * @param password The password of the user.
   * @returns An observable of the registered user model, or undefined if registration fails.
   */
  register(name: string, mail: string, password: string) : Observable<UserModel | undefined> {
    return this.userRepository.register(name, mail, password).pipe(
      tap(user => {
        this.isLoggedInSubject.next(user !== undefined)
        this.userRepository.checkAdminStatus().subscribe(this.isAdminInSubject);
      }) // Notify observers when logged in
    );
  }

  /**
   * Logs in a user with the provided credentials.
   * @param mail The email of the user.
   * @param password The password of the user.
   * @returns An observable of the logged-in user model, or undefined if login fails.
   */
  login(mail: string, password: string) : Observable<UserModel | undefined> {
    return this.userRepository.login(mail, password).pipe(
      tap(user => {
        this.isLoggedInSubject.next(user !== undefined)
        this.userRepository.checkAdminStatus().subscribe(this.isAdminInSubject);
      }) // Notify observers when logged in
    );
  }

  /**
   * Logs out the currently logged-in user.
   * @returns An observable indicating whether the logout operation was successful.
   */
  logout() : Observable<boolean> {
    return this.userRepository.logout().pipe(
      tap(() => {
        this.isLoggedInSubject.next(false);
        this.isAdminInSubject.next(false);
      }) // Notify observers when logged out
    );
  }

  /**
   * Checks if a user is logged in.
   * @returns An observable representing the authentication status.
   */
  isLogged() : Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  checkAdminStatus(): Observable<boolean> {
    return this.isAdminInSubject.asObservable();
  }
}

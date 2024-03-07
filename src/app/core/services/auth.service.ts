import { Injectable } from '@angular/core';
import {UserRepository} from "../repositories/user.repository";
import {UserModel} from "../domain/user.model";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {FormGroup} from "@angular/forms";
import {BooleanWithMessage} from "../domain/boolean-with-message";

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

  private isAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isAdmin: Observable<boolean> = this.isAdminSubject.asObservable();

  constructor(private userRepository : UserRepository) {
    this.userRepository.getLoggedUser().pipe(tap(user => console.log(user)))
      .subscribe(user => {
        this.isLoggedInSubject.next(user !== undefined);
        // this.userRepository.checkAdminStatus().pipe(tap(isAdmin => console.log(isAdmin))).subscribe(this.isAdminSubject);
        this.isAdminSubject.next(user ? user.isAdmin : false);
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
        this.isAdminSubject.next(user ? user.isAdmin : false);
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
        this.isAdminSubject.next(user ? user.isAdmin : false);
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
        this.isAdminSubject.next(false);
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

  /**
   * Validates user registration form.
   * @param form The registration form.
   * @returns A BooleanWithMessage object indicating the validation status and message.
   */
  validateRegistration(form : FormGroup) : BooleanWithMessage {
    let errorMessage: string = '';
    const nameControl = form.get('registerName');
    const emailControl = form.get('registerEmail');
    const passwordControl = form.get('registerPassword');
    const passwordVerifControl = form.get('registerPasswordVerif');

    if (form.invalid) {
      errorMessage = 'Veuillez remplir tous les champs.';
      return {status : false, message: errorMessage};
    } else if (emailControl && emailControl.value && !/\S+@\S+\.\S+/.test(emailControl.value)) {
      errorMessage = 'Veuillez saisir une adresse e-mail valide.';
      return {status : false, message: errorMessage};
    }else if(nameControl && nameControl.value && nameControl.value.length > 12) {
      errorMessage = 'Le nom doit contenir au minimum 12 caractères.';
      return {status : false, message: errorMessage};
    } else if(passwordControl && passwordControl.value && passwordControl.value.length < 8) {
      errorMessage = 'Le mot de passe doit contenir au moins 8 caractères.';
      return {status : false, message: errorMessage};
    } else if (passwordControl && passwordControl.value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,;./:§µù£¤)(~#{'|\W])[A-Za-z\d@$!%*?&\W]{8,}$/.test(passwordControl.value)) {
      errorMessage = 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.';
      return {status : false, message: errorMessage};
    } else if (passwordControl && passwordVerifControl && passwordControl.value !== passwordVerifControl.value) {
      errorMessage = 'Les mots de passe ne correspondent pas.';
      return {status : false, message: errorMessage};
    } else {
      return {status : true, message: errorMessage};
    }
  }

  /**
   * Validates user login form.
   * @param form The login form.
   * @returns A BooleanWithMessage object indicating the validation status and message.
   */
  validateLogin(form : FormGroup): BooleanWithMessage {
    let errorMessage : string = '';
    const emailControl = form.get('loginEmail');

    if (form.invalid) {
      errorMessage = 'Veuillez remplir tous les champs.';
      return {status: false,message: errorMessage};
    } else {
      if (emailControl && emailControl.value && !/\S+@\S+\.\S+/.test(emailControl.value)) {
        errorMessage = 'Veuillez saisir une adresse e-mail valide.';
        return {status: false,message: errorMessage};
      } else {
        return {status: true,message: errorMessage};
      }
    }
  }
}

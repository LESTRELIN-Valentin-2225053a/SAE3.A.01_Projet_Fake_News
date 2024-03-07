import {Component} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../../core/services/auth.service";
import {ValidateLoginComponent} from "../validate-login/validate-login.component";
import {ValidateRegistrationComponent} from "../validate-registration/validate-registration.component";

/**
 * Component representing the login and registration forms.
 * This component allows users to log in or register for the application.
 */
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  /** Form group for user registration. */
  registerForm = new FormGroup({
    registerName: new FormControl(''),
    registerEmail: new FormControl(''),
    registerPassword: new FormControl(''),
    registerPasswordVerif: new FormControl(''),
  });

  /** Form group for user login. */
  loginForm= new FormGroup({
    loginEmail: new FormControl(''),
    loginPassword: new FormControl('')
  });

  /** Boolean to toggle between showing registration and login forms. */
  showInsciption: boolean = true;

  /** Error message to display for form validation errors. */
  errorMessages: string = '';

  /**
   * Constructor for FormLoginComponent.
   * @param router - Router service for navigation.
   * @param authService - Authentication service for user authentication.
   * @param dialogRef - Reference to the MatDialogRef for closing the dialog.
   * @param dialog - MatDialog service for opening dialogs.
   */
  constructor(private router: Router, private authService : AuthService, private dialogRef: MatDialogRef<FormLoginComponent>, public dialog: MatDialog) {}

  /** Toggle method to switch between showing registration and login forms. */
  showRegistrationToggled(): void {
    this.showInsciption = !this.showInsciption;
  }

  /** Method to open a dialog for validating login. */
  openDialogValidateLogin(): void {
    this.dialog.open(ValidateLoginComponent, {});
  }

  /** Method to open a dialog for validating registration. */
  openDialogValidateRegistration(): void {
    this.dialog.open(ValidateRegistrationComponent, {});
  }

  /**
   * Method to validate the login form.
   * @returns {boolean} - Returns true if the form is valid, false otherwise.
   */
  validateLogin(): boolean {
    const result= this.authService.validateLogin(this.loginForm);
    this.errorMessages = result.message;
    return result.status;
  }

  /**
   * Method to send the login form data.
   */
  sendLoginForm(){
    if (this.validateLogin()) {
      const email : string = this.loginForm.get('loginEmail')?.value as string;
      const password : string = this.loginForm.get('loginPassword')?.value as string;
      this.authService.login(email,password).subscribe(
        user => {
          if (user) {
            console.log('Connexion réussie :',user);
            this.dialogRef.close();
            this.openDialogValidateLogin();
          }
          else {
            this.errorMessages = 'Identifiants ou e-mail incorrects'
            console.error(this.errorMessages);
          }
        }
      );
    }
  }

  /**
   * Method to validate the registration form.
   * @returns {boolean} - Returns true if the form is valid, false otherwise.
   */
  validateRegistration() {
    const result = this.authService.validateRegistration(this.registerForm);
    this.errorMessages = result.message;
    return result.status;
  }

  /** Method to send the registration form data. */
  sendRegisterForm(){
    if (this.validateRegistration()) {
      const name : string = this.registerForm.get('registerName')?.value as string;
      const email : string = this.registerForm.get('registerEmail')?.value as string;
      const password : string = this.registerForm.get('registerPassword')?.value as string;
      this.authService.register(name,email,password).subscribe(user => {
        if (user) {
          console.log('Inscription réussie :',user);
          this.openDialogValidateRegistration();
          this.showRegistrationToggled();
        } else {
          this.errorMessages = 'Erreur lors de l\'inscription. Veuillez réessayer.';
          console.error(this.errorMessages);
        }
      });
    }
  }

  /** Method to close the dialog and navigate to the home page. */
  CloseDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['']);
  }
}

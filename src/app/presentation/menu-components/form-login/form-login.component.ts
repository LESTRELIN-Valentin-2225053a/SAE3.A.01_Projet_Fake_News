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
  validateLogin() {
    this.errorMessages = '';
    const emailControl = this.loginForm.get('loginEmail');
    const passwordControl = this.loginForm.get('loginPassword');

    if (this.loginForm.invalid) {
      this.errorMessages = 'Veuillez remplir tous les champs.';
      return false;
    } else {
      if (emailControl && emailControl.value && !/\S+@\S+\.\S+/.test(emailControl.value)) {
        this.errorMessages = 'Veuillez saisir une adresse e-mail valide.';
        return false;
      } else {
        return true;
      }
    }
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
    this.errorMessages = '';
    const nameControl = this.registerForm.get('registerName');
    const emailControl = this.registerForm.get('registerEmail');
    const passwordControl = this.registerForm.get('registerPassword');
    const passwordVerifControl = this.registerForm.get('registerPasswordVerif');

    if (this.registerForm.invalid) {
      this.errorMessages = 'Veuillez remplir tous les champs.';
      return false;
    } else if (emailControl && emailControl.value && !/\S+@\S+\.\S+/.test(emailControl.value)) {
      this.errorMessages = 'Veuillez saisir une adresse e-mail valide.';
      return false;
    }else if(nameControl && nameControl.value && nameControl.value.length > 12) {
      this.errorMessages = 'Le nom doit contenir au minimum 12 caractères.';
      return false;
    } else if(passwordControl && passwordControl.value && passwordControl.value.length < 8) {
      this.errorMessages = 'Le mot de passe doit contenir au moins 8 caractères.';
      return false;
    } else if (passwordControl && passwordControl.value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,;./:§µù£¤)(~#{'|\W])[A-Za-z\d@$!%*?&\W]{8,}$/.test(passwordControl.value)) {
      this.errorMessages = 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.';
      return false;
    } else if (passwordControl && passwordVerifControl && passwordControl.value !== passwordVerifControl.value) {
      this.errorMessages = 'Les mots de passe ne correspondent pas.';
      return false;
    } else {
      return true;
    }
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

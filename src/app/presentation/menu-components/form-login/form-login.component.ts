import {Component} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../../core/services/auth.service";
import {ValidateLoginComponent} from "../validate-login/validate-login.component";
import {ValidateRegistrationComponent} from "../validate-registration/validate-registration.component";
// import {APIService} from "../services/apiservice.service";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  registerForm = new FormGroup({
    registerName: new FormControl(''),
    registerEmail: new FormControl(''),
    registerPassword: new FormControl(''),
    registerPasswordVerif: new FormControl(''),
  });

  loginForm= new FormGroup({
    loginEmail: new FormControl(''),
    loginPassword: new FormControl('')
  });

  showInsciption: boolean = true;

  errorMessages: string = '';


  constructor(private router: Router, private authService : AuthService, private dialogRef: MatDialogRef<FormLoginComponent>, public dialog: MatDialog) {}

  showRegistrationToggled(): void {
    this.showInsciption = !this.showInsciption;
  }


  openDialogValidateLogin(): void {
    this.dialog.open(ValidateLoginComponent, {});
  }

  openDialogValidateRegistration(): void {
    this.dialog.open(ValidateRegistrationComponent, {});
  }

  /**
   * Validate the register form
   * @function validateLogin
   * @returns {boolean}
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
      this.errorMessages = 'Le nom doit contenir au maximum 12 caractères.';
      return false;
    } else if(passwordControl && passwordControl.value && passwordControl.value.length < 8) {
      this.errorMessages = 'Le mot de passe doit contenir au moins 8 caractères.';
      return false;
    } else if (passwordControl && passwordControl.value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordControl.value)) {
      this.errorMessages = 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.';
      return false;
    } else if (passwordControl && passwordVerifControl && passwordControl.value !== passwordVerifControl.value) {
      this.errorMessages = 'Les mots de passe ne correspondent pas.';
      return false;
    } else {
      return true;
    }
  }

  sendRegisterForm(){
    // this.apiService.register(this.registerForm).then(response => {
    //   console.log('Inscription réussie', response);
    // }).catch(error => {
    //   console.error('Erreur lors de l\'inscription', error);
    // });
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

  CloseDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['']);
  }
}

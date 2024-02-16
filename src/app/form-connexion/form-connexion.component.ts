import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule, NgIf} from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {APIService} from "../services/apiservice.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ValidateLoginComponent} from "../validate-login/validate-login.component";
import {ValidateInscriptionComponent} from "../validate-inscription/validate-inscription.component";

@Component({
  selector: 'app-form-connexion',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-connexion.component.html',
  styleUrl: './form-connexion.component.css'
})
export class FormConnexionComponent {
  registerForm = new FormGroup({
    registerName: new FormControl(''),
    registerEmail: new FormControl(''),
    registerPassword: new FormControl(''),
    registerPasswordVerif: new FormControl(''),
  });

  loginForm = new FormGroup({
    loginEmail: new FormControl(''),
    loginPassword: new FormControl('')
  });

  showInsciption: boolean = true;

  apiService: APIService = inject(APIService);

  errorMessages: string = '';

  constructor(private router: Router, private dialogRef: MatDialogRef<FormConnexionComponent>, public dialog: MatDialog) {}

  showInscriptionToggled(): void {
    this.showInsciption = !this.showInsciption;
  }

  openDialogValidateLogin(): void {
    const dialogRef = this.dialog.open(ValidateLoginComponent, {});
  }

  openDialogValidateinscription(): void {
    const dialogRef = this.dialog.open(ValidateInscriptionComponent, {});
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



  /**
   *  Send the login form to the API
   *  @function sendLoginForm
   *  @returns {void}
   */
  sendLoginForm(): void {
    if (this.validateLogin()) {
      this.apiService.login(this.loginForm).then(response => {
        console.log('Connexion réussie', response);
        localStorage.setItem('login', response.data.name);
        this.dialogRef.close();
        this.openDialogValidateLogin();
      }).catch(error => {
        console.error('Erreur lors de la connexion', error);
        this.errorMessages = 'Identifiants ou e-mail incorrects';
      });
    }
  }

  validateinscription() {
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


  sendRegisterForm() {
    if (this.validateinscription()) {
      this.apiService.register(this.registerForm).then(response => {
        console.log('Inscription réussie', response);
        this.openDialogValidateinscription();
        this.showInscriptionToggled();
      }).catch(error => {
        console.error('Erreur lors de l\'inscription', error);
        this.errorMessages = 'Erreur lors de l\'inscription. Veuillez réessayer.';
      });
    }
  }

  CloseDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['']);
  }
}




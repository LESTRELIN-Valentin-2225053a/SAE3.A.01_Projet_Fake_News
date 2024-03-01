import {Component} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
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

  // apiService : APIService = inject(APIService);

  showInscriptionToggled(): void {
    this.showInsciption = !this.showInsciption;
  }

  sendLoginForm(){

    // this.apiService.login(this.loginForm).then(response => {
    //   console.log('Connexion réussie', response);
    // }).catch(error => {
    //   console.error('Erreur lors de la connexion', error);
    // });
  }

  sendRegisterForm(){
    // this.apiService.register(this.registerForm).then(response => {
    //   console.log('Inscription réussie', response);
    // }).catch(error => {
    //   console.error('Erreur lors de l\'inscription', error);
    // });
  }
}

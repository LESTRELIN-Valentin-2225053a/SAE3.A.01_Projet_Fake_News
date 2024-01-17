import { Injectable } from '@angular/core';
import axios from 'axios';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiBaseUrl = 'http://sae3-a-01-api.alwaysdata.net';
  constructor() {
    axios.defaults.withCredentials = true;
  }

  getCsrfToken(){
    return axios.get(`${this.apiBaseUrl}/sanctum/csrf-cookie`);
  }

  async register(registerForm: FormGroup) {
    const credentials = {
      name: registerForm.get('registerName')?.value,
      email: registerForm.get('registerEmail')?.value,
      password: registerForm.get('registerPassword')?.value,
      passwordVerif: registerForm.get('registerPasswordVerif')?.value,
    };

    await this.getCsrfToken();
    return axios.post(`${this.apiBaseUrl}/api/register`, credentials);
  }

  async login(loginForm: FormGroup) {
    const credentials = {
      email: loginForm.get('loginEmail')?.value,
      password: loginForm.get('loginPassword')?.value,
    };
    await this.getCsrfToken();
    return axios.post(`${this.apiBaseUrl}/api/login`, credentials);
  }

    async logout(){
    await this.getCsrfToken();
    return axios.post(`${this.apiBaseUrl}/api/logout`);
  }

  async User(){
    return axios.get(`${this.apiBaseUrl}/api/user`);
  }
}

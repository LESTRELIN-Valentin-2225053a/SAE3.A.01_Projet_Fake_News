import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiBaseUrl = 'http://localhost:8000';
  constructor() {
    axios.defaults.withCredentials = true;
  }

  getCsrfToken(){
    return axios.get(`${this.apiBaseUrl}/api/csrf-cookie`);
  }

  async register(model: any){
    await this.getCsrfToken();
    return axios.post(`${this.apiBaseUrl}/api/register`,model);
  }

  async login(model: any) {
    await this.getCsrfToken();
    return axios.post(`${this.apiBaseUrl}/api/login`, model);
  }

  async logout(){
    await this.getCsrfToken();
    return axios.post(`${this.apiBaseUrl}/api/logout`);
  }

  async User(){
    await this.getCsrfToken();
    return axios.get(`${this.apiBaseUrl}/api/user`);
  }

}

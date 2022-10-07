import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiUlr = environment.apiUlr;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  endpoint = apiUlr + '/api';

  private issuer = {
    login: this.endpoint + '/auth/login',
    register: this.endpoint +  '/auth/register',
  };

  constructor() { }

  handleData(token: any) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  // Verify the token
  isValidToken() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1
          ? true
          : false;
      }
    } else {
      return false;
    }
  }

  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }
}

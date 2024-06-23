import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtRequest } from '../models/jwtRequest';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = `${environment.chBase}/auth/login`;
  
  constructor(private http: HttpClient) {}

  login(jwtRequest: JwtRequest) {
    return this.http.post(this.loginUrl, jwtRequest)
  }

  showRole() {
    let token = sessionStorage.getItem('token');
    if (!token) {
      return null;
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.role;
  }
  
  verificar() {
    let token = sessionStorage.getItem('token');
    return token != null;
  }

  getUsername() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return null;
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.sub;
  }
}
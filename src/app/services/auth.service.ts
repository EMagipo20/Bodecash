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
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(jwtRequest: JwtRequest): Observable<string> {
    return this.http.post(this.loginUrl, jwtRequest, { responseType: 'text' }).pipe(
      tap(token => {
        this.saveToken(token);
        console.log('Token:', token);
      })
    );
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

  saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  verificar() {
    let token = sessionStorage.getItem('token');
    return token != null;
  }

  logout() {
    sessionStorage.removeItem('token');
  }
}
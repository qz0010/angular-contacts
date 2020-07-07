import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ApiService} from './api.service';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
    private api: ApiService
  ) {
  }

  get token(): string {
    return localStorage.getItem('x-auth-token');
  }

  login(): Observable<any> {
    return this.api.login().pipe(
      tap(
        (data) => {
          this.setToken(data.token);
        }
      )
    );
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(token) {
    if (token) {
      localStorage.setItem('x-auth-token', token);
    } else {
      localStorage.removeItem('x-auth-token');
    }
  }
}

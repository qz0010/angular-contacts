import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {IContact, ILoginRes} from '../interfaces/api';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  login(): Observable<ILoginRes> {
    return of({token: `${Date.now()}`}).pipe(delay(400));
  }

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.url}/users`);
  }
}

import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

  constructor(
    private http: HttpClient,
  ) { }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  setCurrentUser(user: User): Observable<User> {
    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );

    return of(user);
  }

  getCurrentUser(): Observable<User> {
    const STORED_USER = JSON.parse(localStorage.getItem('user')) || null;
    return of(STORED_USER);
  }
}

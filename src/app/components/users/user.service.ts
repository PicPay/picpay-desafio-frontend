import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

const API = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listUser() {
    return this.http
    .get<User[]>(API + '/users');
  }

  // listUser() {
  //   return this.http
  //   .get<User[]>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
  // }
}

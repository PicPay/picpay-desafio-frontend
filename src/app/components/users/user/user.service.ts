import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://api.github.com';
// const API = 'https://run.mocky.io';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listUser() {
    return this.http
    .get<Object[]>(API + '/users');
  }

  // listUser() {
  //   return this.http
  //   .get<Object[]>(API + '/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989');
  // }
}

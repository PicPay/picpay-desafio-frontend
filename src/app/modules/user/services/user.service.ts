import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
  }

}

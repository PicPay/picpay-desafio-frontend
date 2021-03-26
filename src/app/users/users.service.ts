import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../data/types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API_USERS = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";
  private readonly API_POST = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";

  constructor( private http: HttpClient ) { }

  listContacts() {
    return this.http.get<User[]>(this.API_USERS);
  }
}


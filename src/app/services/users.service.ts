import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  apiUrl = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce"

  constructor(private httpClient: HttpClient) { 
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}

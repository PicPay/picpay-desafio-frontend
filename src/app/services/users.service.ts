import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUsersURL = environment.apiUsersURL;
  constructor(private http: HttpClient) {}

  getListOfUsers() {
    return this.http.get<Users[]>(
      `${this.apiUsersURL}/5d531c4f2e0000620081ddce`,
    );
  }
}

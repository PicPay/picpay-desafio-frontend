import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@models/user/user.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USERS_URL = environment.USERS_URL;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.USERS_URL);
  }
}

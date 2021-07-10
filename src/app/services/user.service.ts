import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userList: any[];
  private endpoint = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

  constructor(private httpClient: HttpClient) {
    this.userList = [];
  }

  get users() {
    return this.userList;
  }

  getListOfUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint);
  }
}

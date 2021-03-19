import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user';

import { environment } from '../../../environments/environment';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>  {
    const endpoint = '/5d531c4f2e0000620081ddce';
    const finalUrl = `${environment.mockApiV2}${endpoint}`
 
    return this.http.get<User[]>(finalUrl);
  }
}

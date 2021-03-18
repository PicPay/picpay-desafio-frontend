import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user';

import { environment } from '../../../environments/environment';

@Injectable()
export class UsersPaymentService {
  apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.mockApi;
  }

  getUsers(): Observable<User[]>  {
    const endpoint = '/5d531c4f2e0000620081ddce';
    const finalUrl = `${this.apiUrl}${endpoint}`
 
    return this.http.get<User[]>(finalUrl);
  }
}

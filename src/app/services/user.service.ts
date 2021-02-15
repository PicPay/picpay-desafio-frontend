import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.interface';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class UserService {

  private baseApiUrl = 'https://www.mocky.io';

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseApiUrl}/v2/5d531c4f2e0000620081ddce`);
  }
}

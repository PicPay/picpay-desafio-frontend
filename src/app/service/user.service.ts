import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

import { ApiService } from './api.service';

@Injectable()
export class UserService {

  private baseUrl = 'www.mocky.io/v2'

  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<User[]> {
    return this.apiService.get(`${this.baseUrl}/5d531c4f2e0000620081ddce`);
  }

}
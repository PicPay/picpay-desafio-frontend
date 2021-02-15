import { Injectable } from '@angular/core';
import { User } from '@core/domains/user/user.domain';
import { APIBaseRoutes } from '@core/services/api/api-base.routes';
import { ApiService } from '@core/services/api/api.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private endpoints = {
    list: '5d531c4f2e0000620081ddce',
  };

  constructor(private apiService: ApiService) {}

  listUsers(): Observable<User[]> {
    return this.apiService.list<User[]>(
      `${APIBaseRoutes.BASE_USERS_API_URL}${this.endpoints.list}`
    );
  }

  listUserFilterKeys(): string[] {
    return Object.keys(UserFilter).filter((value) => isNaN(+value));
  }
}

export enum UserFilter {
  ALL = 1,
  PAID = 2,
  PENDING = 3,
}

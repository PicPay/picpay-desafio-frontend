import { Injectable } from '@angular/core';
import { UserApi } from '@picpay-lib/ngx-api';
import { IUser, User } from '@picpay-lib/ngx-domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userApi: UserApi) {}

  getList(): Observable<User[]> {
    return this.userApi.retrieveList().pipe(map((userList: IUser[]) => userList.map((user: IUser) => new User(user))));
  }
}

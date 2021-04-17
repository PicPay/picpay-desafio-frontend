import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@picpay-lib/ngx-domain';
import { IUserApiModel, ParseUserApiToUser } from '../../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserApi {
  private resource = 'v2/5d531c4f2e0000620081ddce';

  constructor(private http: HttpClient) {}

  retrieveList(): Observable<IUser[]> {
    return this.http
      .get<IUserApiModel[]>(this.resource)
      .pipe(map((users: IUserApiModel[]) => users.map((user) => ParseUserApiToUser(user))));
  }
}

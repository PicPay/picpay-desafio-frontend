import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { retry} from 'rxjs/operators';
import { UserAccount } from '../model/user-account.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  public USER_ACCOUNT_URL = environment.usersAccountsAPI;

  constructor(private http: HttpClient) { }

  getUserAccounts() {
    return this.http.get<UserAccount[]>(this.USER_ACCOUNT_URL)
      .pipe(
        retry(1)
      )
  }
}

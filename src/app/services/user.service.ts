import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { User } from 'src/app/models/user.model';

const CACHE_SIZE = 1;
const API_ENDPOINT = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users$: Observable<Array<User>>;

  constructor(private httpClient: HttpClient) {
    this.users$ = this.httpClient.get<Array<User>>(API_ENDPOINT).pipe(
      shareReplay(CACHE_SIZE)
    );
  }

  get users() {
    return this.users$;
  }
}

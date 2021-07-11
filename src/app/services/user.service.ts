import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';


import { User } from 'src/app/models/user.model';

const CACHE_SIZE = 1;
const API_ENDPOINT = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private cache$: Observable<Array<User>>;

  constructor(private httpClient: HttpClient) { }

  get users() {
    if (!this.cache$) {
      this.cache$ = this.requestUsers().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  private requestUsers() {
    return this.httpClient.get<Array<User>>(API_ENDPOINT).pipe(
      map(response => response));
  }
}

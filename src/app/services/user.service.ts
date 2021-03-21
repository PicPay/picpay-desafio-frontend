import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    @Inject('USERS_URL') private _url: string,
    private _httpClient: HttpClient
  ) {}

  getUsers$() {
    return this._httpClient.get(this._url)
  }
}

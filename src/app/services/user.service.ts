import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    @Inject('USERS_URL') private _url: string,
    private _httpClient: HttpClient
  ) {}

  getUsers$(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>(this._url)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce"

  constructor(private http: HttpClient) { }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }
}

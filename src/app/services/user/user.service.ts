import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

  get () : Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }
}

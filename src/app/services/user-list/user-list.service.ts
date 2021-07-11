import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

  constructor(private http: HttpClient) { }

  get(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
}


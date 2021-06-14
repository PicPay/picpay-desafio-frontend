import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

  constructor(private readonly http: HttpClient) { }

  public listUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${environment.apiUsers}`)
      .pipe(map(users => users));
  }
}

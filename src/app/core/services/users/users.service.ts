import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestOptions = { headers };
    const path = '/v2/5d531c4f2e0000620081ddce';
    const url = environment.baseUrl + path;
    return this.http.get<User[]>(url, requestOptions);
  }
}

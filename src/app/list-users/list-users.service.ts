import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Users} from './users';


@Injectable({
  providedIn: 'root'
})
export class ListUsersService {
  private readonly API = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

constructor(private http: HttpClient) { }
  lista() {
  return this.http.get<Users[]>(this.API)
  .pipe(
    tap(console.log)
  );
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private static URL = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

  constructor(private http: HttpClient) {}

  /**
   * Get users from the API.
   * @returns An observable that resolves to an array of users or to an empty array if an error occurred.
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(UserService.URL).pipe(catchError(() => []));
  }
}

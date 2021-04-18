import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import UserType from '../../types/user/user.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserType[]> {
    return this.httpClient.get<UserType[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Error handle
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}, ` + `error: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
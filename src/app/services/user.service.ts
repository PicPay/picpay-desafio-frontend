
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlList = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';
  urlUser = 'https://run.mocky.io/v3/ef0aefe0-fc17-423c-b548-c769e11eafe1'
  constructor(
    private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlList)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getUser(): Observable<User> {
    return this.httpClient.get<User>(this.urlUser)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
      return throwError(errorMessage);
  };

}

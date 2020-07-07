import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Transaction } from '../models/transaction.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = {
  users: 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce',
  transaction: 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989'
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log(apiUrl.users)
    return this.http.get<User[]>(apiUrl.users, {
      observe: 'body',
      responseType: 'json'
    })
    .pipe(
      tap(users => console.log('users read')),
        catchError(this.handleError('getUsers', []))
    );
  }

  createTransaction(transaction): Observable<Transaction> {
    return this.http
      .post<Transaction>(apiUrl.transaction, transaction, httpOptions)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        catchError(this.handleError<Transaction>('createTransaction'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

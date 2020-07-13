import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseServiceUrl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';  // URL to web api, should be and env variable

  constructor(private http: HttpClient) {}

  /** GET user by id */
  getUser(id: number): Observable<User> {
    const url = `${this.baseServiceUrl}/${id}`; // Supposedly the API could have an endpoint for a specific user
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseServiceUrl)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  /** Log a UserService message */
  private log(message: string): void {
    // TODO: improve user feedback, with a toast, for example
    console.warn(`UserService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

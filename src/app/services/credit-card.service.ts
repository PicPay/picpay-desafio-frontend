import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';

import { CARDS } from '../mocks/mock-cards';
import { CreditCard } from '../interfaces/credit-card';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(
    // private http: HttpClient
    ) {}

  /** GET cards from the server, should have specifics results depending on the User ID */
  getCards(): Observable<CreditCard[]> {
    // CASE: If we had an endpoint for the credit cards list
    /* return this.http.get<CreditCard[]>(this.baseServiceUrl)
      .pipe(
        tap(_ => this.log('fetched cards')),
        catchError(this.handleError<CreditCard[]>('getCards', []))
      ); */
    return of(CARDS);
  }

  /** Log a CardsService message */
  private log(message: string): void {
    // TODO: improve user feedback, with a toast, for example
    console.warn(`CardsService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * TODO: Transform this method to a reusable solution
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

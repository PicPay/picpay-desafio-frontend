import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Payment, PaymentResult } from '../interfaces/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseServiceUrl = 'https://run.mocky.io/v3';  // URL to web api, should be and env variable
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /** POST: make a payment web service */
  makePayment(payment: Payment): Observable<PaymentResult> {
    return this.http.post<Payment>(`${this.baseServiceUrl}/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, payment, this.httpOptions).pipe(
      tap(_ => this.log(`made a payment to user: ${payment.destination_user_id}`)),
      catchError(this.handleError<Payment>('makePayment'))
    );
  }

  /** Log a PaymentService message */
  private log(message: string): void {
    // TODO: improve user feedback, with a toast, for example
    console.warn(`PaymentService: ${message}`);
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

      // TODO: better job of transforming error for user consumption and reusable solution
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

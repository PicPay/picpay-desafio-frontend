import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionPayload } from '../models/transaction-payload';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ModalPaymentService {

  flags = new Subject<any>();
  user = new Subject<any>();
  currentUser = this.user.asObservable();
  payment = new Subject<any>();

  private paymentUrl = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  openModalPayment(user): Observable<any> {
    this.user.next(user);
    return this.user.asObservable();
  }

  postPayment(payload): Observable<TransactionPayload[]> {
    return this.http.post<TransactionPayload[]>(this.paymentUrl, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

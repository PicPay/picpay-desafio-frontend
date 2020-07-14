import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionPayload } from '../models/transaction-payload';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ModalPaymentService {

  flags = new Subject<any>();
  user = new Subject<any>();
  currentUser = this.user.asObservable();
  payment = new Subject<any>();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  openModalPayment(user): Observable<any> {
    this.user.next(user);
    return this.user.asObservable();
  }

  postPayment(payload): Observable<TransactionPayload[]> {
    return this.http.post<TransactionPayload[]>(`${environment.paymentUrl}`, payload).pipe(
      map((obj) => obj),
      catchError((e) => this.handleError(e))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

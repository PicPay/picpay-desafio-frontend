import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import TransactionType from '../../types/transaction/transaction.type';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  url = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  constructor(private httpClient: HttpClient) { }

  postTransaction(payload: TransactionType): Observable<any> {
    return this.httpClient.post<TransactionType>(this.url, payload)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  
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
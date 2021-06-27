import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionPayload } from '../../../shared/models/transaction-payload.model';
import { ResponseTransaction } from '../../../shared/models/responseTransaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  payment(transaction: TransactionPayload): Observable<ResponseTransaction> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const requestOptions = { headers };
    const path = '/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';
    const url = environment.baseUrl + path;
    return this.http.post<ResponseTransaction>(
      url,
      transaction,
      requestOptions,
    );
  }
}

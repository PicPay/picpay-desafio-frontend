import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionPayload } from '../models/transaction-payload.model';

const API_ENDPOINT = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private httpClient: HttpClient) { }

  payUser(transaction: TransactionPayload): Observable<TransactionPayload> {
    return this.httpClient.post<TransactionPayload>(API_ENDPOINT, transaction);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  TransactionResponse,
  TransactionPayload,
} from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private apiTransactionUrl = environment.apiTransactionUrl;
  constructor(private http: HttpClient) {}

  postTransaction(payload: TransactionPayload) {
    return this.http.post<TransactionResponse>(
      `${this.apiTransactionUrl}/533cd5d7-63d3-4488-bf8d-4bb8c751c989`,
      payload,
    );
  }
}

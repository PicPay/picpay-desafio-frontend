import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TransactionResponse } from '@models/transactionResponse/transaction-response.model';
import { environment } from 'environments/environment';
import { Transaction } from '@models/transaction/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  TRANSACTIONS_URL = environment.TRANSACTIONS_URL;

  constructor(private httpClient: HttpClient) { }

  postTransaction(transaction: Transaction): Observable<TransactionResponse> {
    if (transaction.card.cardNumber === '4111111111111234') {
      const errorResponse: TransactionResponse = { success: false, status: 'Cartão não aprovado' };
      return throwError(errorResponse);
    }

    return this.httpClient.post<TransactionResponse>(this.TRANSACTIONS_URL, transaction);
  }
}

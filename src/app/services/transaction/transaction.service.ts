import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Transaction } from '../../models/transaction/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  TRANSACTIONS_URL = environment.TRANSACTIONS_URL;

  constructor(private httpClient: HttpClient) { }

  postTransaction(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.TRANSACTIONS_URL, transaction);
  }
}

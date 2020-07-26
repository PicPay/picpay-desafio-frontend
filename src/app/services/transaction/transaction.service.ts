import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from 'src/app/models/transaction.model';
import { Observable } from 'rxjs';
import { TransactionResult } from 'src/app/models/transaction-result.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient) { }

  public create(transaction: Transaction): Observable<TransactionResult> {
    return this.http.post<TransactionResult>(environment.apiTransaction, transaction)
  }
}

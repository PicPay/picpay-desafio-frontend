import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TransactionPayload } from '../model/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public TRANSACTION_URL = environment.transactionAPI;

  constructor(private http: HttpClient) { }

  save(transaction: TransactionPayload) {
    return this.http.post(this.TRANSACTION_URL, transaction).pipe(
      retry(1)
    )
  }

}

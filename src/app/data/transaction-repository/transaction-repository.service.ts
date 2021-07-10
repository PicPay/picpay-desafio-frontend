import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionPayload } from 'src/app/core/entities/payloads/transaction-payload.model';
import { SendTransactionResponse } from 'src/app/core/entities/responses/send-transaction-response.model';
import { TransactionInterface } from 'src/app/core/interfaces/transaction.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionRepositoryService implements TransactionInterface {

  constructor(private httpClient: HttpClient) { }

  send(payload: TransactionPayload): Observable<SendTransactionResponse> {
    const body = { ...payload };

    return this.httpClient.post<SendTransactionResponse>(environment.transaction.send, { body });
  }
}

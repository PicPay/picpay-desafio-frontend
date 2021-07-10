import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionRepositoryService } from 'src/app/data/transaction-repository/transaction-repository.service';
import { TransactionPayload } from '../../entities/payloads/transaction-payload.model';
import { SendTransactionResponse } from '../../entities/responses/send-transaction-response.model';
import { TransactionInterface } from '../../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionUsecaseService implements TransactionInterface {

  constructor(private transactionRepositoryService: TransactionRepositoryService) { }

  send(payload: TransactionPayload): Observable<SendTransactionResponse> {
    return this.transactionRepositoryService.send(payload);
  }
}

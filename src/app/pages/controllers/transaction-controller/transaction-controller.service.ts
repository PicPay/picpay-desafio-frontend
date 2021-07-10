import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionPayload } from 'src/app/core/entities/payloads/transaction-payload.model';
import { SendTransactionResponse } from 'src/app/core/entities/responses/send-transaction-response.model';
import { TransactionInterface } from 'src/app/core/interfaces/transaction.interface';
import { TransactionUsecaseService } from 'src/app/core/usecases/transaction-usecase/transaction-usecase.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionControllerService implements TransactionInterface {

  constructor(private transactionUsecaseService: TransactionUsecaseService) { }

  send(payload: TransactionPayload): Observable<SendTransactionResponse> {
    return this.transactionUsecaseService.send(payload);
  }
}

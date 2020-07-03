import { Injectable } from '@angular/core';
import { ITransactionRepository, ITransactionUsecase } from '../interface';
import { Observable } from 'rxjs';
import { TransactionPayloadEntity } from '../entities/transaction-payload-entity';
import { TransactionResponseEntity } from '../entities/transaction-response-entity';

@Injectable({
  providedIn: 'root'
})
export class TransactionUsecaseService implements ITransactionUsecase {

  constructor(
    private transactionRepository: ITransactionRepository
  ) { }

  transaction(param: TransactionPayloadEntity): Observable<TransactionResponseEntity> {
    return this.transactionRepository.transaction(param);
  }
}

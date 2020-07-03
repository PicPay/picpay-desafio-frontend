import { Injectable } from '@angular/core';
import { ITransactionRepository, ITransactionUsecase } from '../interface';
import { Observable, throwError } from 'rxjs';
import { TransactionPayloadEntity } from '../entities/transaction-payload-entity';
import { TransactionResponseEntity } from '../entities/transaction-response-entity';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionUsecaseService implements ITransactionUsecase {

  constructor(
    private transactionRepository: ITransactionRepository
  ) { }

  transaction(param: TransactionPayloadEntity): Observable<boolean> {
    if (this.validateCard(param.card_number)) {
      return this.transactionRepository.transaction(param)
        .pipe(
          map((res: TransactionResponseEntity) => this.validateResponse(res))
        );
    } else {
      return throwError(null);
    }
  }

  validateResponse(res): boolean {
    if (res.success && res.status === 'Aprovada') {
      return true;
    }

    return false;
  }

  validateCard(cardNumber: string): boolean {
    if (cardNumber === '4111111111111234') {
      return false;
    }

    return true;
  }
}

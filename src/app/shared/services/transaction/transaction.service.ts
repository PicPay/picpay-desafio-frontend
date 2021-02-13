import { Injectable } from '@angular/core';
import { TransactionPayload } from '@core/domains/transaction/transaction-payload.domain';
import { Transaction } from '@core/domains/transaction/transaction.domain';
import { APIBaseRoutes } from '@core/services/api/api-base.routes';
import { ApiService } from '@core/services/api/api.service';
import { MOCK_INVALID_CARD } from '@shared/mocks/card/card.mock';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TransactionAPIResult {
  transaction: Transaction;
}

@Injectable()
export class TransactionService {
  private endpoints = {
    post: '5d542ec72f000048248614b3',
  };

  constructor(private apiService: ApiService) {}

  postTransaction(
    transactionPayload: TransactionPayload
  ): Observable<Transaction> {
    if (transactionPayload.card_number === MOCK_INVALID_CARD.card_number) {
      return throwError({status: 'Não foi possível fazer a transação, número de cartão inválido'});
    }

    return this.apiService
      .post<TransactionAPIResult | TransactionPayload>(
        `${APIBaseRoutes.BASE_TRANSACTION_API_URL}${this.endpoints.post}/${transactionPayload.destination_user_id}`,
        transactionPayload
      )
      .pipe(
        map(
          (response: TransactionAPIResult): Transaction => {
            return response.transaction;
          }
        )
      );
  }
}

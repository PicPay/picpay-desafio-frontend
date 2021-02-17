import { Injectable } from '@angular/core';
import { TransactionContext } from '@contexts/shared/services/transaction/transaction-context.interface';
import { TransactionPayload } from '@core/domains/transaction/transaction-payload.domain';
import { Transaction } from '@core/domains/transaction/transaction.domain';
import { APIBaseRoutes } from '@core/services/api/api-base.routes';
import { ApiService } from '@core/services/api/api.service';
import { TranslateService } from '@ngx-translate/core';
import { MOCK_INVALID_CARD } from '@shared/mocks/card/card.mock';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TRANSACTION_SERVICE_VOCABULARY } from './transaction.service.vocabulary';

@Injectable()
export class TransactionService {
  vocabulary: TransactionContext = TRANSACTION_SERVICE_VOCABULARY;

  private endpoints = {
    post: '533cd5d7-63d3-4488-bf8d-4bb8c751c989',
  };

  constructor(
    private apiService: ApiService,
    private translateService: TranslateService
  ) {}

  postTransaction(
    transactionPayload: TransactionPayload
  ): Observable<Transaction> {
    return this.verifyCard(transactionPayload.card_number).pipe(
      switchMap(() => {
        return this.apiService
          .post<Transaction | TransactionPayload>(
            `${APIBaseRoutes.BASE_TRANSACTION_API_URL}${this.endpoints.post}`,
            transactionPayload
          )
          .pipe(
            map((response: Transaction): Transaction => response),
            catchError(() =>
              throwError({
                status: this.translateService.instant(this.vocabulary.errors),
              })
            )
          );
      }),
      catchError((err) => throwError(err))
    );
  }

  verifyCard(cardNumber: string): Observable<unknown> {
    return new Observable((observer) => {
      if (cardNumber === MOCK_INVALID_CARD.card_number) {
        return observer.error({
          status: this.translateService.instant(this.vocabulary.invalidCard),
        });
      }
      return observer.next();
    });
  }
}

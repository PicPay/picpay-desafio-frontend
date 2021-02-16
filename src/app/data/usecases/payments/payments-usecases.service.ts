import { Injectable } from '@angular/core';
import { PaymentsUsecases } from './payments-usecases.interface';
import { PaymentsRepositoryService } from '../../repositories/payments/payments-repository.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * Service to handle Payment transaction and it's bussiness logic.
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentsUsecasesService implements PaymentsUsecases {
  constructor(private paymentsRepository: PaymentsRepositoryService) {}

  /**
   * Method that handle bussiness logic and execure the HTTP request to send the payment.
   * @param transactionPayload data to be send on the request.
   */
  sendMoney<T>(transactionPayload: T): Observable<T> {
    return this.paymentsRepository.insert<T>(transactionPayload)
      .pipe(delay(1000));
  }
}

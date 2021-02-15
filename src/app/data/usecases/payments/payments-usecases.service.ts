import { Injectable } from '@angular/core';
import { PaymentsUsecases } from './payments-usecases.interface';
import { PaymentsRepositoryService } from '../../repositories/payments/payments-repository.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaymentsUsecasesService implements PaymentsUsecases {
  constructor(private paymentsRepository: PaymentsRepositoryService) {}

  sendMoney<T>(transactionPayload: T): Observable<T> {
    return this.paymentsRepository.insert<T>(transactionPayload)
      .pipe(delay(2000));
  }
}

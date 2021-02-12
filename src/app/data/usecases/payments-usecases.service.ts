import { Injectable } from '@angular/core';
import { PaymentsUsecases } from './payments-usecases.interface';
import { PaymentsRepositoryService } from '../repositories/payments-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentsUsecasesService implements PaymentsUsecases {

  constructor(private paymentsRepository: PaymentsRepositoryService) { }

  sendMoney<T>() {
    return this.paymentsRepository.insert<T>();
  }
}

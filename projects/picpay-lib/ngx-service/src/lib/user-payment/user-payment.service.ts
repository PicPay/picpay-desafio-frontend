import { Injectable } from '@angular/core';
import { UserPaymentApi } from '@picpay-lib/ngx-api';
import { CreditCard, IPaymentTransactionResult, PaymentTransaction, User } from '@picpay-lib/ngx-domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserPaymentService {
  constructor(private userPaymentApi: UserPaymentApi) {}

  sendMoneyToUser(
    destinationUser: User,
    paymentCard: CreditCard,
    value: number
  ): Observable<IPaymentTransactionResult> {
    const payment: PaymentTransaction = new PaymentTransaction({
      destinationUser,
      paymentCard,
      value,
    });
    return this.userPaymentApi.post(payment);
  }
}

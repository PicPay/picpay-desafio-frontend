import { Injectable } from '@angular/core';
import { Payment } from '@shared/interfaces/payment';
import { PaymentStorage } from '@shared/interfaces/payment-storage';
import { PaymentStorageFilter } from '@shared/interfaces/payment-storage-filter';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  savePayment(payment: Payment): Observable<PaymentStorage> {
    return this.loadPayments().pipe(
      switchMap((payments: PaymentStorage[]) => {
        const paymentStorage: PaymentStorage = {
          id: payment.id,
          last_card_number: payment.card_number.substr(payment.card_number.length - 4),
          destination_user_id: payment.destination_user_id,
          value: payment.value,
          comment: payment.comment,
          date: new Date(),
        };

        payments.push(paymentStorage);

        localStorage.setItem('payments', JSON.stringify(payments));

        return of(paymentStorage);
      })
    );
  }

  loadPayments(filter?: PaymentStorageFilter): Observable<PaymentStorage[]> {
    filter = filter || {};
    const payments = localStorage.getItem('payments');

    if (!payments) {
      return of([]);
    }

    const paymentsToArray = JSON.parse(payments).reverse();

    return of(
      paymentsToArray.filter((payment: PaymentStorage) => {
        let isValid = true;

        if (filter.destination_user_id) {
          isValid = filter.destination_user_id === payment.destination_user_id;
        }

        return isValid;
      })
    );
  }
}

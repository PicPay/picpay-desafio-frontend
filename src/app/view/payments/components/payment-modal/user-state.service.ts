import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { TransactionPayload } from 'src/app/core/interfaces/transaction-payload.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private userSelectedForPayment: BehaviorSubject<User> = new BehaviorSubject(null);
  private cardSelectedForPayment: Subject<TransactionPayload> = new Subject();
  private paymentAmout: BehaviorSubject<string> = new BehaviorSubject('000');
  userCreditCards = [
  // valid card
  {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
  },
  // invalid card
  {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
  },
  {
    card_number: '4111111111119859',
    cvv: 123,
    expiry_date: '01/20',
  },
];

  getUserSelectedForPayment(): Observable<User> {
    return this.userSelectedForPayment.asObservable();
  }

  setUSerSelectedForPayment(user: User): void {
    this.userSelectedForPayment.next(user)
  }

  getCardSelectedForPayment(): Observable<TransactionPayload> {
    return this.cardSelectedForPayment.asObservable();
  }

  setCardSelectedForPayment(creditCard: TransactionPayload): void {
    this.cardSelectedForPayment.next(creditCard)
  }

  getPaymentValue(): Observable<string> {
    return this.paymentAmout.asObservable();
  }

  setPaymentValue(value: string): void {
    this.paymentAmout.next(value);
  }
}

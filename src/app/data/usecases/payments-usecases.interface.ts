import { Observable } from 'rxjs';

export abstract class PaymentsUsecases {
  abstract sendMoney<T>(): Observable<T[]>;
}

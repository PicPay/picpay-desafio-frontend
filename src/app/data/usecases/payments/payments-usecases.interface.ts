import { Observable } from 'rxjs';

export abstract class PaymentsUsecases {
  abstract sendMoney<T>(transactionPayload: T): Observable<T>;
}

import { Observable } from 'rxjs';
import { SendTransactionResponse } from '../entities/responses/send-transaction-response.model';

export abstract class TransactionInterface {
  abstract send(): Observable<SendTransactionResponse>;
}

import { Observable } from 'rxjs';
import { SendTransactionResponse } from '../models/responses/send-transaction-response.model';

export abstract class TransactionInterface {
  abstract send(): Observable<SendTransactionResponse>;
}

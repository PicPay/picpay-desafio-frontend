import { Observable } from 'rxjs';
import { TransactionPayload } from '../entities/payloads/transaction-payload.model';
import { SendTransactionResponse } from '../entities/responses/send-transaction-response.model';

export abstract class TransactionInterface {
  abstract send(payload: TransactionPayload): Observable<SendTransactionResponse>;
}

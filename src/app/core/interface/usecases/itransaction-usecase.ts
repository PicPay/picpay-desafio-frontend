import { TransactionPayloadEntity } from '../../entities/transaction-payload-entity';
import { Observable } from 'rxjs';
import { TransactionResponseEntity } from '../../entities/transaction-response-entity';

export abstract class ITransactionUsecase {
    abstract transaction(param: TransactionPayloadEntity): Observable<boolean>;
}

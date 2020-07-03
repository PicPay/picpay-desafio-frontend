import { Observable } from 'rxjs';
import { TransactionPayloadEntity } from '../../entities/transaction-payload-entity';
import { TransactionResponseEntity } from '../../entities/transaction-response-entity';

export abstract class ITransactionRepository {
    abstract transaction(param: TransactionPayloadEntity): Observable<TransactionResponseEntity>;
}

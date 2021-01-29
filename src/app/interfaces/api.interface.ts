import { Observable } from "rxjs";
import { IUser } from './user.interface';
import { ITransactionPayload } from './transactionPayload.interface';
import { ITransacao } from './transacao.interface';

export abstract class IApi {
    abstract getUsers(): Observable<IUser[]> 
    abstract postTransacao(transactionPayload:ITransactionPayload ): Observable<ITransacao> 
}
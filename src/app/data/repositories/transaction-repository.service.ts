import { Injectable } from '@angular/core';
import { ITransactionRepository } from 'src/app/core/interface';
import { TransactionPayloadEntity } from 'src/app/core/entities/transaction-payload-entity';
import { Observable } from 'rxjs';
import { TransactionResponseEntity } from 'src/app/core/entities/transaction-response-entity';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionRepositoryService implements ITransactionRepository {

  constructor(
    private httpClient: HttpClient
  ) { }
  transaction(param: TransactionPayloadEntity): Observable<TransactionResponseEntity> {
    return this.httpClient.post<TransactionResponseEntity>(environment.serverUrl + 'v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', param);
  }
}

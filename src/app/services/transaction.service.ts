import { Injectable } from '@angular/core';
import { TransactionPayload } from './../models/transactionPayload';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUrl = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  constructor(private httpClient: HttpClient) { }

  postTransaction(transaction: TransactionPayload[]) {
    this.httpClient.post<TransactionPayload>(this.transactionUrl, transaction);
  }

}

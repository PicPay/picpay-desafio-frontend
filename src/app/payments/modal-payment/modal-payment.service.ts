import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Transaction, TransactionResult } from './interfaces/transaction.interface'

@Injectable({
  providedIn: 'root'
})
export class ModalPaymentService {
  private apiUrl: string = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989"

  constructor(private httpClient: HttpClient) { }

  createTransaction(payload: Transaction) {
    return this.httpClient.post<TransactionResult>(this.apiUrl, {
      payload
    });
  }
}

import { Injectable } from '@angular/core';
import { Transaction } from '@model/transaction';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class TransactionService {

  private baseUrl = 'run.mocky.io/v3'

  constructor (
    private apiService: ApiService
  ) {}

  saveTransaction(transaction: Transaction): Observable<any> {
    return this.apiService.post(`${this.baseUrl}/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, transaction);
  }}

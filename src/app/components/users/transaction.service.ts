import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  listUser() {
    return this.http
    .post<Transaction[]>('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989');
  }
}

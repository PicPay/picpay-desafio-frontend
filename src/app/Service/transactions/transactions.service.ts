import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ITransactions } from 'src/app/Models/ITransactions';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor( private httpClient: HttpClient) { }

  sendPayment($payloadParams) : Observable<ITransactions> {
    const body = {...$payloadParams}

    return this.httpClient.post<ITransactions>(environment.sendPayment, { body });
  }
}
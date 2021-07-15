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

  sendPayment($payloadParams) {
    return new Promise(resolve => {
      debugger
      if ($payloadParams.card_number.slice(-4) === '1234')
        return resolve({ success: false, status: 'Reprovada' })
      this.httpClient.post(environment.sendPayment, $payloadParams).subscribe(
        data => {
          return resolve(data)
        },
        error => {
          return resolve({ success: false, status: 'Reprovada' })
        }
      );
    });
  
}

}
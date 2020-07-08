import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PaymentResponse, TransactionPayload } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  postPayment (transaction: TransactionPayload): Observable<PaymentResponse> {
    return this.http.post<PaymentResponse>('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', transaction);
  }
}
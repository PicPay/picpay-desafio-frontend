import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionPayload } from 'src/app/models/payment/transaction-payload.model';
import { Observable } from 'rxjs';
import { PaymentResponse } from 'src/app/models/result/payment-response.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  constructor(private http: HttpClient) { }

  create(transaction: TransactionPayload): Observable<PaymentResponse> {
    return this.http.post<PaymentResponse>(this.baseUrl, transaction)
  }
}

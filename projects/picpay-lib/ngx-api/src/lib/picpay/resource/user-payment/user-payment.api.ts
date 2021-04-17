import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPaymentTransactionResult, PaymentTransaction } from '@picpay-lib/ngx-domain';
import { IPaymentTransactionApiModel, ParsePaymentTransactionToPaymentTransactionApi } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class UserPaymentApi {
  private resource = 'v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  constructor(private http: HttpClient) {}

  post(payment: PaymentTransaction): Observable<IPaymentTransactionResult> {
    const paymentApi: IPaymentTransactionApiModel = ParsePaymentTransactionToPaymentTransactionApi(payment);
    return this.http.post<IPaymentTransactionResult>(this.resource, paymentApi);
  }
}

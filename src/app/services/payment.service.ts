import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaymentModel } from '../models/payment-model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    @Inject('PAYMENT_URL') private _url: string,
    private _httpClient: HttpClient
  ) { }

  pay$(payment: PaymentModel): Observable<{success: boolean, status: string}> { 
    return this._httpClient.post<{success: boolean, status: string}>(this._url, payment);
  }
}

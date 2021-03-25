import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentInfo } from './payment-info.model';
import { TransactionResponse } from './transaction-response.model';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';
    }

    sendPayment(paymentInfo: PaymentInfo): Observable<TransactionResponse> {
        return this.http.post<TransactionResponse>(this.apiUrl, PaymentInfo.asRequestBody(paymentInfo));
    }
}

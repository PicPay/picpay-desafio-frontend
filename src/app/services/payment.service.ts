import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionPayload } from '../models/transaction-payload.interface';
import { TransactionResponse } from '../models/transaction-response.interface';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class PaymentService {

  private baseApiUrl = 'https://run.mocky.io';

  constructor(
    private http: HttpClient,
  ) { }

  payUser(payload: TransactionPayload): Observable<TransactionResponse> {
    return this.http.post<TransactionResponse>(`${this.baseApiUrl}/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, payload);
  }
}

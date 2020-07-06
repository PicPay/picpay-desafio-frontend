import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface TransactionPayload {
  card_number: string;
  cvv: number;
  expiry_date: string;
  destination_user_id: number;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  postPayment (transaction: TransactionPayload): Observable<Object> {
    return this.http.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', transaction);
  }
}
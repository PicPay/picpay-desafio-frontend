import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TransactionPayload } from '../shared/models/transaction.model';
import { ResponseTransaction } from '../shared/models/responseTransaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {}

  payment(transaction: TransactionPayload): Observable<ResponseTransaction> {
    const url = `${environment.baseUrl}/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`;
    return this.http.post<ResponseTransaction>(url, transaction);
  }
}
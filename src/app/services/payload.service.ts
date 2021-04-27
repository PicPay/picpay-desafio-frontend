import { TransactionPayload } from '../interfaces/payload.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionResponsePayload } from '../interfaces/transaction-response-payload.model'

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  baseUrl = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989"

  constructor(
    private http: HttpClient,
    ) { }


  transactionResponse(transactionPayload: TransactionPayload): Observable<TransactionResponsePayload> {
    return this.http.post<TransactionResponsePayload>(this.baseUrl, transactionPayload);
  }

}
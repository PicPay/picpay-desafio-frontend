import { TransactionPayload } from './payload.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  baseUrl = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989"

  constructor(
    private http: HttpClient,
    ) { }


  payLoad(transactionPayload: TransactionPayload): Observable<TransactionPayload> {
    return this.http.post<TransactionPayload>(this.baseUrl, transactionPayload);
  }

}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionPayload } from '../transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private setTransactionURL:string = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }


  public setTransaction(transactionPayload: TransactionPayload):Observable<TransactionPayload>{
    return this.http.post<TransactionPayload>(this.setTransactionURL, 
    JSON.stringify(transactionPayload), this.httpOptions)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly url: string = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';
  
  constructor(private readonly http: HttpClient) { }

  public createTransaction(transaction: TransactionPayload): Observable<TransactionResult> {
    return this.http.post<TransactionResult>(this.url, transaction);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  PostTransaction(body: TransactionPayload): Observable<TransactionPayload> {
    return this.http.post<TransactionPayload>('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', body);
  }
}

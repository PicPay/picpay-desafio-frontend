import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model'
import { TransactionPayload } from '../model/transaction-payload.model';

@Injectable({
  providedIn: 'root'
})

export class CardPaymentService {

  constructor(private http: HttpClient) { }

  userList(): Observable<User>{
    return this.http.get<User>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
  }

  payment(card): Observable<TransactionPayload>{
    return this.http.post<TransactionPayload>('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', card)
  }

}

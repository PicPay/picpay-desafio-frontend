import { Card } from './../../../data-access/transactions/card.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private getUsersURL:string = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';
  private cards:Card[] = [
      // valid card
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      // invalid card
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
   
  ]

  constructor(private http: HttpClient) { }

  public getUsers():Observable<any>{
    return this.http.get(this.getUsersURL);
  }
  
  public getCards():Observable<Card[]>{
      return of(this.cards);
  }
}

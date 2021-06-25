import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  GetUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
  }

  GetCards(): Observable<Card[]>{
    let cards = new BehaviorSubject([
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ]);

    return cards.asObservable();
  }
}

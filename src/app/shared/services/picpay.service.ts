import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@shared/interfaces/user';
import { Payment } from '@shared/interfaces/payment';
import { Card } from '@shared/interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class PicPayService {
  readonly api = 'https://run.mocky.io';

  constructor(private http: HttpClient) {}

  users(): Observable<User[]> {
    return this.http.get(`${this.api}/v2/5d531c4f2e0000620081ddce`).pipe(
      map((users: User[]) => {
        // TODO: add filter
        return users;
      })
    );
  }

  cards(): Observable<Card[]> {
    const cards: Card[] = [
      {
        id: 1,
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      {
        id: 2,
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];

    return of(cards);
  }

  payment(payment: Payment): Observable<Payment> {
    const id = Math.floor(Math.random() * (999999 - 100000)); // :D

    return this.http.post(`${this.api}/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, payment).pipe(
      map(() => {
        return { id, ...payment };
      })
    );
  }
}

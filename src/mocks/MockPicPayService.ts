import { Card } from '@shared/interfaces/card';
import { Payment } from '@shared/interfaces/payment';
import { User } from '@shared/interfaces/user';
import { of, Observable } from 'rxjs';

export class MockPicPayService {
  fakeUsers: User[] = [
    {
      id: 1,
      name: 'Test 1',
      username: '@test1',
      img: 'http://test1.png',
    },
    {
      id: 2,
      name: 'Test 2',
      username: '@test2',
      img: 'http://test2.png',
    },
    {
      id: 3,
      name: 'Test 3',
      username: '@test3',
      img: 'http://test3.png',
    },
  ];

  users(): Observable<User[]> {
    return of(this.fakeUsers);
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
    const id = Math.floor(Math.random() * (999999 - 100000));
    return of({ id, ...payment });
  }
}

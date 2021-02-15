import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../models/card.interface';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class CardService {

  private cards: Card[] = [
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
  ];

  constructor() { }

  getCards(): Observable<Card[]> {
    return of<Card[]>(this.cards);
  }
}

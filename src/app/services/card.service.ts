import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CardModel } from '../models/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: CardModel[] = [
    {
      cardNumber: '1111111111111111',
      cvv: 789,
      expiryDate: '01/18'
    },
    {
      cardNumber: '4111111111111234',
      cvv: 123,
      expiryDate: '01/20'
    }
  ];

  constructor() { }

  getCards$(): Observable<CardModel[]> {
    return of(this.cards);
  }
}

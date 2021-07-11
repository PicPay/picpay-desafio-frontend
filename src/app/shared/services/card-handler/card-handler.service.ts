import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from 'src/app/core/entities/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardHandlerService {
  cardsState$: Observable<Card[]>;
  
  private _cardState: BehaviorSubject<Card[]>;

  constructor() {
    this._cardState = new BehaviorSubject<Card[]>([
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
        valid: true,
        selected: true,
      },
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
        valid: false,
        selected: false,
      },
    ]);
    this.cardsState$ = this._cardState.asObservable();
  }

  set cardState(cards: Card[]) {
    this._cardState.next(cards);
  }
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Card } from 'src/app/shared/model/card.model';

const CARDS: Card[] = [
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

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Mock do usuário da conta
  private _user = {
    name: 'Paulo Macedo',
    cards: CARDS
  }
  constructor() { }

  getCards() {
    return of(this._user.cards)
  }
}

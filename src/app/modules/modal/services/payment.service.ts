import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Card } from "../../transaction/models/card";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  // New cards added for expiry_date purpose
  cards: Card[] = [
    {
      card_number: "1111111111111111",
      cvv: 789,
      expiry_date: "01/18",
    },
    {
      card_number: "4111111111111234",
      cvv: 123,
      expiry_date: "01/20",
    },
    {
      card_number: "1323232323232323",
      cvv: 879,
      expiry_date: "01/28",
    },
    {
      card_number: "5555555555555555",
      cvv: 503,
      expiry_date: "04/23",
    },
    {
      card_number: "777777777777777",
      cvv: 777,
      expiry_date: "03/21",
    },
  ];
  _cards: Observable<Card[]>;

  constructor() {
    this._cards = of(this.cards);
  }

  getCards(): Observable<Card[]> {
    return this._cards;
  }
}

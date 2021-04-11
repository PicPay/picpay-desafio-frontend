import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Card } from "../../models/card.model";

@Injectable({
  providedIn: "root",
})
export class CardService {
  constructor() {}

  getCards(): Card[] {
    const cardData: Card[] = [
      // valid card
      {
        card_number: "1111111111111111",
        cvv: 789,
        expiry_date: "01/18",
      },
      // invalid card
      {
        card_number: "4111111111111234",
        cvv: 123,
        expiry_date: "01/20",
      },
    ];
    return cardData;
  }
}

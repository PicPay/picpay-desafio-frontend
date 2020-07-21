import { Injectable } from '@angular/core';
import { CreditCards } from '../../mocks/card-mock';
import { Card } from 'src/app/models/card/card.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: Card[];
  constructor() { }

  getCards(): Observable<Card[]> {

    return of(CreditCards)
  }
}

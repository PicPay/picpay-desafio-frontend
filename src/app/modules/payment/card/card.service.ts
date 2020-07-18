import { Card } from './card.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(card: Card): Observable<Card[]> {
    let cards = [];

    this.read().subscribe(storedCards => {
      cards = [...storedCards, card];

      localStorage.setItem(
        'cards',
        JSON.stringify(cards)
      );
    });

    return of(cards);
  }

  read(): Observable<Card[]> {
    return of(JSON.parse(localStorage.getItem('cards')) || []);
  }

  setCurrentCard(card: Card): Observable<Card> {
    localStorage.setItem(
      'card',
      JSON.stringify(card)
    );

    return of(card);
  }

  getCurrentCard(): Observable<Card> {
    let storedCard = JSON.parse(localStorage.getItem('card')) || null;
    this.read().subscribe(cards => {
      if (cards.length > 0) {
        storedCard = cards[0];
        this.setCurrentCard(cards[0]);
      }
    });
    return of(storedCard);
  }
}

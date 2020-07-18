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
    const STORED_CARDS = JSON.parse(localStorage.getItem('cards')) || [];

    const CARDS = [...STORED_CARDS, card];

    localStorage.setItem(
      'cards',
      JSON.stringify(CARDS)
    );

    return of(CARDS);
  }
}

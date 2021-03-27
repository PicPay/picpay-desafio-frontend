import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '@shared/interfaces/card';

@Component({
  selector: 'ngx-credit-cards',
  templateUrl: 'credit-cards.component.html',
  styleUrls: ['credit-cards.component.scss'],
})
export class CreditCardsComponent implements OnInit {
  @Input() cards: Card[] = [];
  @Input() selectedCard: Card | null = null;

  @Output() changeCard = new EventEmitter();

  get currentIndex(): number {
    return this.cards.indexOf(this.selectedCard);
  }

  ngOnInit(): void {
    if (!this.selectedCard) {
      this.selectedCard = this.cards[0];
    }
  }

  onChange(): void {
    const nextIndex = this.currentIndex === 0 ? 1 : 0;

    this.selectedCard = this.cards[nextIndex];
    this.changeCard.emit(this.selectedCard);
  }
}

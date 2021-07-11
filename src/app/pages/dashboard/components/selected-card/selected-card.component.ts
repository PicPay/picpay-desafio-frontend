import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/core/entities/card.model';
import { CardHandlerService } from 'src/app/shared/services/card-handler/card-handler.service';

@Component({
  selector: 'app-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.scss'],
})
export class SelectedCardComponent implements OnInit, OnDestroy {
  selectedCard: Card;
  subscriptions = new Subscription();

  constructor(private cardHandlerService: CardHandlerService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.cardHandlerService.cardsState$.subscribe((cards) => {
        const findedCard = cards.find((card) => card.selected);

        if (findedCard) {
          this.selectedCard = findedCard;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

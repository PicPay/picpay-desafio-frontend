import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/core/entities/card.model';
import { SimpleMessageComponent } from 'src/app/shared/components/dialogs/simple-message/simple-message.component';
import { CardHandlerService } from 'src/app/shared/services/card-handler/card-handler.service';
import { AddCardComponent } from '../dialogs/add-card/add-card.component';

@Component({
  selector: 'app-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.scss'],
})
export class SelectedCardComponent implements OnInit, OnDestroy {
  selectedCard: Card;
  subscriptions = new Subscription();

  private allCards: Card[];

  constructor(
    private cardHandlerService: CardHandlerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.cardHandlerService.cardsState$.subscribe((cards) => {
        const findedCard = cards.find((card) => card.selected);
        this.allCards = [...cards];

        if (findedCard) {
          this.selectedCard = findedCard;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addCard(): void {
    const modal = this.dialog.open(AddCardComponent);

    this.subscriptions.add(
      modal.afterClosed()
        .subscribe((event: Card) => {
          if (event) {
            this.cardHandlerService.cardState = [event, ...this.allCards];
            
            const config = new MatDialogConfig();
            config.data = {
              title: 'Sucesso!!!',
              message: 'Cartão cadastrado com sucesso',
              allowHtml: false,
            };

            this.dialog.open(SimpleMessageComponent, config);
          }
        })
    );
  }
}

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDrawer, MatSlideToggleChange } from '@angular/material';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/core/entities/card.model';
import { SimpleMessageComponent } from 'src/app/shared/components/dialogs/simple-message/simple-message.component';
import { CardHandlerService } from 'src/app/shared/services/card-handler/card-handler.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss'],
})
export class BasePageComponent implements OnInit, OnDestroy {
  cards: Card[];
  subscriptions = new Subscription();

  constructor(
    private cardHandlerService: CardHandlerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.cardHandlerService.cardsState$.subscribe((cards) => {
        this.cards = [...cards];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toggleHandler(cardIndex: number, event: MatSlideToggleChange) {
    const { checked } = event;
    if (checked) {
      this.cards = this.cards.map((card) => {
        card.selected = !checked;
        return card;
      });
      this.cards[cardIndex].selected = checked;
      this.cardHandlerService.cardState = this.cards;
    } else {
      this.cards = this.cards.map((card) => {
        card.selected = false;
        return card;
      });
    }
  }

  closeVerify(drawer: MatDrawer): void {
    const noOneSelected = !this.cards.some((card) => card.selected);
    if (noOneSelected) {
      drawer.open();
      const config = new MatDialogConfig();
      config.data = {
        title: 'Ops!',
        message: 'Selecione ao menos um cartão de crédito',
        allowHtml: false,
      }
      this.dialog.open(SimpleMessageComponent, config);
    }
  }
}

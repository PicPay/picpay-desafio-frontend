import { Card } from './../../models/card';
import { CardsService } from './../../services/cards/cards.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-list-card-modal',
  templateUrl: './list-card-modal.component.html',
  styleUrls: ['./list-card-modal.component.scss']
})
export class ListCardModalComponent implements OnInit {

  cardList: Card[];
  constructor(private card: CardsService, private matDialog: MatDialogRef<ListCardModalComponent>) { }

  ngOnInit() {
    this.cardList = this.card.requestAvailabelCards();
  }

  selectCard(card) {
    this.matDialog.close(card)
  }

}

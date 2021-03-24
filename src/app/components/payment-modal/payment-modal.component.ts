import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card-model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {
  cards: CardModel[] = [];

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getCards$().subscribe(
      result => {
        this.cards = result;
      }
    );
  }

}

import { Card } from './../card/card.model';
import { CardService } from './../card/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  hasCard = false;
  currentCard: Card;

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.cardService.getCurrentCard().subscribe(card => {
      if (card) {
        this.hasCard = true;
        this.currentCard = card;
      }
    });
  }

}

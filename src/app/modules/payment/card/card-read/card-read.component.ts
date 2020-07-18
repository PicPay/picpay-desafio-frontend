import { Card } from './../card.model';
import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-read',
  templateUrl: './card-read.component.html',
  styleUrls: ['./card-read.component.scss']
})
export class CardReadComponent implements OnInit {

  cards: Card[];

  constructor(
    private cardService: CardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cardService.read().subscribe(cards => {
      this.cards = cards;
      console.log(this.cards);
    });
  }

  selectCard(card: Card): void {
    this.cardService.setCurrentCard(card);
    this.router.navigate(['/pagamento']);
  }
}

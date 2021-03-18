import { CardService } from './../card.service';
import { Card } from './../card.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-read',
  templateUrl: './card-read.component.html',
  styleUrls: ['./card-read.component.scss']
})
export class CardReadComponent implements OnInit {

  cards: Card[]

  constructor(private cardService: CardService) { }

  ngOnInit() {  
    this.cardService.readCard().subscribe(cards => {
      this.cards = cards
      console.log(cards)
    })
  }

}

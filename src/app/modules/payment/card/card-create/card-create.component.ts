import { CardService } from '../card.service';
import { Card } from '../card.model';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

  card: Card = {
    card_number: '',
    cvv: null,
    expiry_date: ''
  };

  canCreateCard = false;

  constructor(
    private cardService: CardService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createCard(): void {
    this.cardService.create(this.card).subscribe(() => {
      this.cardService.showMessage('Cartão cadastrado!');
      this.router.navigate(['/cartoes']);
    });
  }

  verifyFields(): void {
    if (this.card.card_number.length === 16 &&
      this.card.cvv &&
      this.card.cvv.toString().length === 3 &&
      this.card.expiry_date.length === 5) {
      this.canCreateCard = true;
    }
  }

}

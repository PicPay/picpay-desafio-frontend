import { UserService } from './../user/user.service';
import { User } from './../user/user.model';
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
  currentUser: User;

  constructor(
    private cardService: CardService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });

    this.cardService.getCurrentCard().subscribe(card => {
      if (card) {
        this.hasCard = true;
        this.currentCard = card;
      }
    });
  }

}

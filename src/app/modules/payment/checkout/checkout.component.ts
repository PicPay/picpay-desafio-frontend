import { Checkout } from './checkout.model';
import { CheckoutService } from './checkout.service';
import { UserService } from './../user/user.service';
import { User } from './../user/user.model';
import { Card } from './../card/card.model';
import { CardService } from './../card/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  hasCard = false;
  currentCard: Card;
  currentUser: User;
  checkout: Checkout = {
    card_number: '',
    cvv: null,
    expiry_date: '',
    destination_user_id: null,
    value: 0
  };
  canPay = false;
  loading = false;

  constructor(
    private cardService: CardService,
    private userService: UserService,
    private checkoutService: CheckoutService,
    private router: Router
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

    Object.assign(this.checkout, this.currentCard);

    this.checkout.destination_user_id = Number(this.currentUser.id);
    this.checkout.cvv = Number(this.checkout.cvv);
  }

  sendPayment(): void {
    this.loading = true;
    this.checkoutService.create(this.checkout).subscribe(() => {
      this.loading = false;
      this.checkoutService.showMessage('Pagamento enviado com sucesso!');
      this.router.navigate(['/']);
    });
  }

  valueChange(): void {
    this.canPay = this.checkout.value > 0 && this.hasCard ? true : false;
  }
}

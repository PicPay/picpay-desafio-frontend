import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Card } from './models/card.interface';
import { TransactionPayload } from './models/transaction-payload.interface';
import { TransactionResponse } from './models/transaction-response.interface';
import { User } from './models/user.interface';
import { CardService } from './services/card.service';
import { PaymentService } from './services/payment.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Desafio Picpay Front-end';
  users: Observable<User[]>;
  cards: Observable<Card[]>;
  showModalPayment = false;
  showModalPaymentMessage = false;

  paymentForm = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required
    ]),
    value: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(
    private userService: UserService,
    private paymentService: PaymentService,
    private cardService: CardService,
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  public payUserModal(user: User): void {
    this.showModalPayment = true;    
    this.cards = this.cardService.getCards();
  }

  public payUser(): void {

    const payload: TransactionPayload = {
      card_number: this.paymentForm.get('cardNumber').value,
      cvv: 789,
      expiry_date: '01/18',
      destination_user_id: 123,
      value: this.paymentForm.get('value').value,
    };

    this.paymentService.payUser(payload).subscribe((result: TransactionResponse) => {
      // TODO: show payment status message
      console.log(result);
    });
  }
}

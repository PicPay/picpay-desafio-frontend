import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from './../../models/user';
import { TransactionPayload } from './../../models/transactionPayload';
import { creditCard } from './../../models/creditCard';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  @Input() user: User;

  @Output() closeEvent = new EventEmitter();

  cards: creditCard[] = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  closeModal(): void {
    this.closeEvent.emit();
  }

}
import { User } from '../../components/user/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})
export class UserPaymentComponent implements OnInit {

  cards = [
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

}

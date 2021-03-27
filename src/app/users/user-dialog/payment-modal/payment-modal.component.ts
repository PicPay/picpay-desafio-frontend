import { User, Cards, TransactionPayload } from './../../../data/types';
import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import cards from '../../../data/cards.js'

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  destinationUser: User;
  paymentForm: FormGroup;
  cards = cards;

  constructor( 
    private service: UsersService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
     this.service.currentDestinationUSer
    .subscribe(user => this.destinationUser = user);

    this.paymentForm = this.formBuilder.group({
      card: [this.cards.cards[0]],
      id: [this.destinationUser.id],
      value: [null, Validators.required]
    })
  }

  onCloseBtn() {
    this.service.changeModalVisibility(false);
    this.service.changePaymentVisibility(false);
  }

  onSubmit() {
    if(this.paymentForm.valid) {
      const form = this.paymentForm.value
      const transactionPayload: TransactionPayload = {
        card_number: form.card.card_number,
        cvv: form.card.cvv,
        expiry_date: form.card.expiry_date,   
        destination_user_id: form.id,
        value: form.value
      };
      this.service.transactionPost(transactionPayload);
      this.service.changePaymentVisibility(false);
    }
  }
}

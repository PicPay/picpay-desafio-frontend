import { User, Cards } from './../../../data/types';
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
      card: [this.cards.cards[0].card_number],
      id: [this.destinationUser.id],
      value: [null, Validators.required]
    })
  }

  onCloseBtn() {
    this.service.changeModalVisibility(false);
  }

  onSubmit() {
    if(this.paymentForm.valid) {
      const transactionInfo = {
        name: this.destinationUser.name,
        value: this.paymentForm.value.value,
        status: false
      }
      this.service.changeTransactionInfo(transactionInfo)
      console.log(this.paymentForm)
      console.log(this.paymentForm.value)
    }
  }
}

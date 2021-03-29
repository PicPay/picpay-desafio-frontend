import { DialogService } from './../dialog.service';
import { HttpService } from './../../../core/http/http.service';
import { Card } from '../../../core/types';
import { User, TransactionPayload } from '../../../core/types';
import { UsersService } from '../../users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss', '../common-modal-style.scss']
})
export class PaymentModalComponent implements OnInit {

  destinationUser: User;
  paymentForm: FormGroup;
  cards: Card[];

  constructor(
    private userService: UsersService,
    private modalService: DialogService,
    private httpService: HttpService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.cards = this.httpService.getCards();
    this.userService.currentDestinationUser
      .subscribe(user => this.destinationUser = user);

    this.paymentForm = this.formBuilder.group({
      card: [this.cards[0], Validators.required],
      id: [this.destinationUser.id, Validators.required],
      value: [null, [Validators.required, Validators.min(0.01)]]
    });
  }

  onCloseBtn() {
    this.modalService.changeModalVisibility(false);
    this.modalService.changePaymentVisibility(false);
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const form = this.paymentForm.value;
      const transactionPayload: TransactionPayload = {
        card_number: form.card.card_number,
        cvv: form.card.cvv,
        expiry_date: form.card.expiry_date,
        destination_user_id: form.id,
        value: form.value
      };
      this.httpService.transactionPost(transactionPayload);
      this.modalService.changePaymentVisibility(false);
    } else {
      this.checkError();
    }
  }

  checkError() {
    this.paymentForm.get('value').markAsTouched();
  }
}

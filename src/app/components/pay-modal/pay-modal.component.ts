import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { PayUserService } from 'src/app/services/pay-users.service';


import { PayUser } from '../pay-users/pay-user/pay-user.model';
import { TransactionPayLoad } from 'src/app/models/TransactionPayLoad.model';
import { CreditCard } from 'src/app/models/credit-card';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.component.html',
  styleUrls: ['./pay-modal.component.scss']
})
export class PayModalComponent implements OnInit, OnDestroy {

  @Input() modalReference: BsModalRef;
  @Input() userModal: PayUser;

  constructor(private payUserService: PayUserService) {

  }
  private payloadTransaction: TransactionPayLoad;

  private cards: Array<CreditCard> = [];
  private cardSelected: CreditCard;
  private valueSend: number;

  ngOnInit() {
    this.farmCards();
  }

  ngOnDestroy(): void { }

  selected() {
    console.log(this.userModal)
    console.log(this.cardSelected);
    console.log(this.valueSend);
  }

  payUserModal() {
    this.loadPayLoadTransaction();
    if (this.payloadTransaction) {
      console.log(this.payloadTransaction);
      this.postSendPayment();
    }
  }
  
  postSendPayment() {
    this.payUserService.postSendPayment(this.payloadTransaction)
      .subscribe(
        () => this.onSuccess(),
        (error) => this.handleError(error)
      )
  }
  loadPayLoadTransaction() {
    this.payloadTransaction = new TransactionPayLoad;
    this.payloadTransaction.destination_user_id = this.userModal.id;
    this.payloadTransaction.card_number = this.cardSelected.card_number;
    this.payloadTransaction.cvv = this.cardSelected.cvv;
    this.payloadTransaction.expiry_date = this.cardSelected.expiry_date;
    this.payloadTransaction.value = this.valueSend;
  }

  onSuccess() {

  }

  handleError(error: string) {

  }

  farmCards() {
    let cards: CreditCard[] = [
      {
        card_number: '1111111111111111',
        expiry_date: '01/18',
        cvv: 789,
      },
      {
        card_number: '4111111111111234',
        expiry_date: '01/20',
        cvv: 123,
      }
    ]
    this.cards.push(cards[0])
    this.cards.push(cards[1])
  }

  getValueSend(event: any){
    this.valueSend = event.target.value;
  }
}

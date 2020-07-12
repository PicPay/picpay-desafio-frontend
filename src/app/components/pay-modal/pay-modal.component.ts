import { Component, OnInit, OnDestroy, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PayUserService } from 'src/app/services/pay-users.service';


import { PayUser } from '../pay-users/pay-user/pay-user.model';
import { TransactionPayLoad } from 'src/app/models/TransactionPayLoad.model';
import { CreditCard } from 'src/app/models/credit-card';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.component.html',
  styleUrls: ['./pay-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PayModalComponent implements OnInit, OnDestroy {

  @Input() payModalReference: BsModalRef;
  @Input() payModalMessage: BsModalRef;

  @Input() userModal: PayUser;
  @ViewChild('payForm', { static: true }) public payForm: NgForm;
  @ViewChild('modalMessage', { static: true }) public modalMessage: any;

  message: string ;

  constructor(
    private payUserService: PayUserService,
    private modalService: BsModalService) {

  }

  private cards: Array<CreditCard> = [];

  ngOnInit() {
    this.farmCards();
  }

  ngOnDestroy(): void { }

  payUserModal() {
    const payload = this.loadPayLoadTransaction();
    if (payload) {
      this.postSendPayment(payload);
    }
  }

  private postSendPayment(payload: TransactionPayLoad) {
    this.payUserService.postSendPayment(payload)
      .subscribe(
        (parametro: any) => { console.log(parametro) },
        (error: any) => this.handleError(error),
        () => console.log("completou")
      )
    this.payModalReference.hide();
  }

  private loadPayLoadTransaction(): TransactionPayLoad {
    let payload: TransactionPayLoad = new TransactionPayLoad(
      this.payForm.value.valueSend,
      this.userModal.id,
      this.payForm.value.selectedCard.card_number,
      this.payForm.value.selectedCard.cvv,
      this.payForm.value.selectedCard.expiry_date,
    );
    return payload;
  }

  onSuccess() {

  }

  handleError(error: string) {
    this.message = "O pagamento NÃO foi concluido com sucesso.";
    this.modalService.show(this.modalMessage);
    console.log(error);
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

  
}

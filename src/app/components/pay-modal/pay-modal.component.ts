import { Component, OnInit, OnDestroy, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PayUserService } from 'src/app/services/pay-users.service';

import { PayUser } from '../pay-users/pay-user/pay-user.model';
import { TransactionPayLoad } from 'src/app/models/TransactionPayLoad.model';
import { CreditCard } from 'src/app/models/credit-card';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.component.html',
  styleUrls: ['./pay-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PayModalComponent implements OnInit, OnDestroy {

  public payForm: FormGroup = new FormGroup({
    'valueSend': new FormControl(null, [Validators.required, Validators.minLength(1)]),
    'selectedCard': new FormControl(null, [Validators.required]),
  });

  subscriptions: Array<Subscription> = [];
  @Input() payModalReference: BsModalRef;
  @Input() payModalMessage: BsModalRef;
  @Input() userModal: PayUser;
  @ViewChild('modalMessage', { static: true }) public modalMessage: any;

  message: string;

  constructor(
    private payUserService: PayUserService,
    private modalService: BsModalService) {

  }

  private cards: Array<CreditCard> = [];

  ngOnInit() {
    this.farmCards();
  }
  ngOnDestroy() {
    this.subscriptions.map(s => s.unsubscribe());
  }

  payUserModal() {
    const payload = this.loadPayLoadTransaction();
    if (payload) {
      this.postSendPayment(payload);
    }
  }

  postSendPayment(payload: TransactionPayLoad) {
    const sub = this.payUserService.postSendPayment(payload)
      .subscribe(
        (process) => { console.log(process); },
        (error: any) => this.onError(error),
        () => this.onSuccess(),
      );
    this.payModalReference.hide();
    this.subscriptions.push(sub);
  }

  private onSuccess() {
    this.message = 'O pagamento foi concluido com sucesso.';
    this.modalService.show(this.modalMessage);
    this.closeModal();
  }

  private onError(error: string) {
    this.message = 'O pagamento NÃO foi concluido com sucesso.';
    this.modalService.show(this.modalMessage);
    console.log(error);
    this.closeModal();
  }

  private closeModal() {
    setTimeout(() => {
      this.closeAllModals();
    }, 2800);
    const body = document.querySelector('body');
    if (body.classList.contains('modal-open')) {
      body.classList.remove('modal-open');
    }
  }

  private closeAllModals() {
    for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
      this.modalService.hide(i);
    }
  }

  private loadPayLoadTransaction(): TransactionPayLoad {
    if (this.payForm.status === 'INVALID') {
      this.lightFields();
    } else {
      const payload: TransactionPayLoad = new TransactionPayLoad(
        this.payForm.value.valueSend,
        this.userModal.id,
        this.payForm.value.selectedCard.card_number,
        this.payForm.value.selectedCard.cvv,
        this.payForm.value.selectedCard.expiry_date,
      );
      return payload;
    }
  }

  private farmCards() {
    const cards: CreditCard[] = [
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
    ];
    this.cards.push(cards[0]);
    this.cards.push(cards[1]);
  }

  private lightFields() {
    this.payForm.get('selectedCard').markAsTouched();
    this.payForm.get('valueSend').markAsTouched();
  }
}

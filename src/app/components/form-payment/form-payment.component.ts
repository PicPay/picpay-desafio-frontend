import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from '../../modal-ref';
import { Card } from '../../models/card.interface';
import { TransactionPayload } from '../../models/transaction-payload.interface';
import { TransactionResponse } from '../../models/transaction-response.interface';
import { User } from '../../models/user.interface';
import { CardService } from '../../services/card.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.scss']
})
export class FormPaymentComponent implements OnInit {

  cards: Card[];
  user: User;

  paymentForm = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required
    ]),
    value: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(
    private paymentService: PaymentService,
    private cardService: CardService,
    private modalRef: ModalRef,
  ) { }

  ngOnInit() {
    this.user = this.modalRef.data;
    this.cardService.getCards().subscribe((cards: Card[]) => {
      this.cards = cards;
    });
  }

  public payUser(): void {
    const cardNumber = this.paymentForm.get('cardNumber').value;
    const paymentValue = this.paymentForm.get('value').value;
    const selectedCard = this.cards.filter((card: Card) => card.card_number === cardNumber).shift();

    const payload: TransactionPayload = {
      card_number: selectedCard.card_number,
      cvv: selectedCard.cvv,
      expiry_date: selectedCard.expiry_date,
      destination_user_id: this.user.id,
      value: paymentValue,
    };

    this.paymentService.payUser(payload).subscribe((result: TransactionResponse) => {
      this.closeModal(result);
    });
  }

  private closeModal(value) {
    this.modalRef.close(value);
  }

}

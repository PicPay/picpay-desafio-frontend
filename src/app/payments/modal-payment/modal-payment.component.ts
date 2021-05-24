import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faHandHoldingUsd, faMoneyCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { formartCurrency } from 'src/helpers/helpers';

import Contact from '../interfaces/contact.interface';
import { Card, FlagsCard } from './interfaces/card.interface';
import { Transaction, TransactionPayload, TransactionResult } from './interfaces/transaction.interface';
import { ModalPaymentService } from './modal-payment.service';

@Component({
  selector: 'modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {
  @Input() openModal: boolean = false;
  @Input() contactReceiving: Contact;

  @Output() closeModal = new EventEmitter<{ open: boolean }>();
  @Output() paymentData = new EventEmitter<TransactionPayload>();

  formartCurrency = formartCurrency;
  faHandHoldingUsd = faHandHoldingUsd;
  faMoneyCheck = faMoneyCheck;
  faSpinner = faSpinner;


  // mock for show failed payment
  successPayment: boolean = true;
  paymentForm: FormGroup;
  loading: boolean = false;
  value: number = 0;
  cardSelectedPay: Card;
  cards: Card[] = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      flag_card: FlagsCard.mastercard
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
      flag_card: FlagsCard.visa
    },
  ];

  constructor(private modalPaymentService: ModalPaymentService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      value: ['', [
        Validators.required, Validators.min(5),
      ]],
      card: ['', [
        Validators.required
      ]]
    })
  }

  handleCardPayment(card: Card): void {
    this.cardSelectedPay = card;
  }

  clearPaymentForm(): void {
    this.paymentForm.reset();
    this.value = 0;
    this.cardSelectedPay = null;
    this.successPayment = !this.successPayment;
  }

  handleCloseModal(): void {
    this.openModal = false;
    this.closeModal.emit({ open: this.openModal })
    this.clearPaymentForm();
  }

  emitPaymentStatus(): void {
    this.paymentData.emit({
      card: this.cardSelectedPay,
      contact: this.contactReceiving,
      value: this.value,
      isSuccess: this.successPayment
    })
    this.clearPaymentForm();
  }

  handleLoading(): void {
    this.loading = !this.loading;
  }

  handleSubmitPayment(e: Event): void {
    e.preventDefault();

    if (!this.paymentForm.valid) return;

    this.handleLoading();

    // mock for show failed payment
    if (!this.successPayment) {
      this.handleLoading();
      this.emitPaymentStatus();
      return;
    }

    const { card_number, cvv, expiry_date } = this.cardSelectedPay;
    const { id: destination_user_id } = this.contactReceiving;
    const payload: Transaction = {
      card_number,
      cvv,
      expiry_date,
      destination_user_id,
      value: this.value,
    }

    this.modalPaymentService.createTransaction(payload).subscribe(
      (data: TransactionResult) => {
        this.handleLoading();
        this.emitPaymentStatus()
      },
      err => console.log(err),
    )
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { CardService } from 'src/app/services/card/card.service';
import { Card } from 'src/app/models/card/card.model';
import { TransactionPayload } from 'src/app/models/payment/transaction-payload.model';
import { PaymentResponse } from 'src/app/models/result/payment-response.model';
import { ModalService } from '../template/modal';
import { NumberValidator } from './validators/numberValidator';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  creditCards: Card[];
  @Input() transaction: TransactionPayload;
  @Input() showModal: boolean = false;
  @Output() response = new EventEmitter<PaymentResponse>();
  errorResponse: PaymentResponse = { status: '', success: false };
  showError: boolean = false;
  formSend: boolean = false;
  form: FormGroup;

  constructor(private cardService: CardService,
    private paymentService: PaymentService,
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private currencyPipe: CurrencyPipe) { }


  ngOnInit() {
    if (!this.creditCards) {
      this.getCards();
    }
    this.form = this.formBuilder.group({
      value: ['', [Validators.required, NumberValidator.minValue()]],
      card: [null, Validators.required]
    });

    this.form.valueChanges.subscribe(form => {
      if (form.value) {
        this.form.patchValue({
          value: this.currencyPipe.transform(form.value.replace(/\D/g, ''), 'BRL', 'symbol', '1.0-0')
        }, { emitEvent: false });
      }
    });
  }

  getCards(): void {
    this.cardService.getCards().subscribe(
      o => { this.creditCards = o }
    );
  }

  close(id: string): void {
    this.modalService.close(id);
    this.form.get('value').reset()
    this.formSend = false;
  }

  onSubmit() {
    this.formSend = true;
    if ((this.form.get('value').valid &&
      this.form.get('card').valid)) {
      this.createTransaction()
    }
  }
  createTransaction(): void {
    let selectedCard: Card = this.form.value.card;
    this.transaction.card_number = selectedCard.card_number;
    this.transaction.cvv = selectedCard.cvv;
    this.transaction.expiry_date = selectedCard.expiry_date;
    this.transaction.value = (this.form.get('value').value).replace(/[^0-9.-]+/g,"");
    this.createPayment(this.transaction);
  }

  createPayment(transaction: TransactionPayload): void {
    this.paymentService.create(transaction)
      .subscribe(
        (response) => {
          this.response.emit(response)
          this.form.get('value').reset()
          this.formSend = false;
        },
        (error: any) => console.log("Ocorreu um erro..."))
  }
}

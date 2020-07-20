import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { CardService } from 'src/app/services/card/card.service';
import { Card } from 'src/app/models/card/card.model';
import { TransactionPayload } from 'src/app/models/payment/transaction-payload.model';
import { PaymentResponse } from 'src/app/models/result/payment-response.model';
import { ModalService } from '../template/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

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
  testPrice = 0;
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
      value: [null, Validators.required],
      card: [null, Validators.required]
    });

    this.form.valueChanges.subscribe(form => {
      if (form.value) {
        let v: number = this.getNumber(form.value);
        this.form.patchValue({
          value: this.currencyPipe.transform(v, 'BRL', 'symbol', '1.0-0')
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
    console.log(this.form.get('card').valid)
    if ((this.form.get('value').valid && this.form.get('card').valid)) {      
      let selectedCard : Card = this.form.value.card;
      this.transaction.card_number = selectedCard.card_number;
      this.transaction.cvv = selectedCard.cvv;
      this.transaction.expiry_date = selectedCard.expiry_date;
      this.transaction.value = this.getNumber(this.form.value.value);
      this.createPayment(this.transaction);
    }
    else {
      this.showError = true;
    }
  }
  getNumber(value: any): number {
    return Number(value.replace(/\D/g, '').replace(/^0+/, ''));
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

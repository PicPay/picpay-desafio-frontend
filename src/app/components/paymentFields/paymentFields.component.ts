import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import cards from '../../services/card.service';

@Component({
  selector: 'app-payment-fields',
  templateUrl: './paymentFields.component.html',
  styleUrls: ['./paymentFields.component.scss']
})

export class PaymentFieldsComponent implements OnInit {
  cards: any[];
  paymentForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.cards = cards;
  }

  submitForm() {
    this.activeModal.close(
      this.transactionData(this.paymentForm.value)
    );
  }

  private createForm() {
    this.paymentForm = this.formBuilder.group({
      paymentValue: ['', [Validators.required, , Validators.min(5)]],
      cardSelection: ['', Validators.required]
    });
  }

  private transactionData = (formValues) => ({
        card_number: formValues.cardSelection.card_number,
        cvv: formValues.cardSelection.cvv,
        expiry_date: formValues.cardSelection.expiry_date,
        value: formValues.paymentValue
  })

  get f() { return this.paymentForm.controls; }
}


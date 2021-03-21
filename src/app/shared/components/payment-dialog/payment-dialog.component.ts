import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreditCard } from '../../models/credit-card.model';
import { TransactionPayload } from '../../models/transaction-payload.model';
import { User } from '../../models/user.model';

export interface PaymentDialogData {
  receiver: User;
  cards: CreditCard[];
}

export type PaymentDialogRef = MatDialogRef<
  PaymentDialogComponent,
  TransactionPayload
>;

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss'],
})
export class PaymentDialogComponent implements OnInit {
  public paymentForm: FormGroup;
  private submitting = false;

  get cardField() {
    return this.paymentForm.get('card');
  }

  get ammountField() {
    return this.paymentForm.get('ammount');
  }

  constructor(
    public dialogRef: MatDialogRef<PaymentDialogComponent, TransactionPayload>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentDialogData,
    private fb: FormBuilder
  ) {
    this.paymentForm = this.fb.group({
      ammount: [0.0, [Validators.required, Validators.min(0.01)]],
      card: [undefined, Validators.required],
    });
  }

  ngOnInit() {
    if (
      !this.data ||
      !this.data.receiver ||
      !this.data.cards ||
      this.data.cards.length === 0
    ) {
      this.dialogRef.close();
    }
  }

  public onSubmit() {
    if (this.submitting || this.paymentForm.invalid) {
      return false;
    }

    this.submitting = true;

    const transaction: TransactionPayload = {
      card_number: this.cardField.value.card_number,
      cvv: +this.cardField.value.cvv,
      expiry_date: this.cardField.value.expiry_date,
      destination_user_id: this.data.receiver.id,
      value: +this.ammountField.value,
    };

    this.dialogRef.close(transaction);
  }
}

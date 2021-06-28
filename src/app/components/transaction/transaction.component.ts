import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/models/card/card.model';
import { Transaction } from 'src/app/models/transaction/transaction.model';
import { User } from 'src/app/models/user/user.model';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  user: User;
  transaction: Transaction;

  cardControl = new FormControl('', Validators.required);
  cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<TransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.user = data.user;
    this.transaction = new Transaction();
  }

  ngOnInit() {
  }

  sendTransaction(transaction: Transaction): void {
    this.transaction.card = this.cardControl.value;
    this.transaction.destination_user_id = this.user.id;

    this.dialog.open(PaymentReceiptComponent, {
      data: { transaction: transaction }
    });

    this.dialogRef.close();
  }
}

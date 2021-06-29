import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from '@models/transaction/transaction.model';
import { User } from '@models/user/user.model';
import { TransactionService } from '@services/transaction/transaction.service';
import { PaymentReceiptComponent } from '@app/components/modal/payment-receipt/payment-receipt.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  user: User;
  transaction: Transaction;

  cardControl = new FormControl('', Validators.required);
  cards = [
    // valid card
    {
      cardNumber: '1111111111111111',
      cvv: 789,
      expiryDate: '01/18',
    },
    // invalid card
    {
      cardNumber: '4111111111111234',
      cvv: 123,
      expiryDate: '01/20',
    },
  ];

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<TransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private transactionService: TransactionService
  ) {
    this.user = data.user;
    this.transaction = new Transaction();
  }

  sendTransaction(transaction: Transaction): void {
    this.transaction.card = this.cardControl.value;
    this.transaction.destinationUserId = this.user.id;

    this.dialogRef.close();

    this.transactionService.postTransaction(transaction)
    .subscribe(
      (response) => {
        this.dialog.open(PaymentReceiptComponent, {
          data: { success: response.success }
        });
      },
      (err) => {
        this.dialog.open(PaymentReceiptComponent, {
          data: { success: err.success }
        });
      }
    );

  }
}

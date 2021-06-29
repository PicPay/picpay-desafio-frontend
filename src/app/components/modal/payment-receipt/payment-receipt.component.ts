import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransactionResponse } from '@app/models/transactionResponse/transaction-response.model';

@Component({
  selector: 'app-payment-receipt',
  templateUrl: './payment-receipt.component.html',
  styleUrls: ['./payment-receipt.component.scss']
})
export class PaymentReceiptComponent implements OnInit {
  transaction: TransactionResponse;

  constructor(
    public dialogRef: MatDialogRef<PaymentReceiptComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.transaction = data.transaction;
  }

  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}

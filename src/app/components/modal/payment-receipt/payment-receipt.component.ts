import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-receipt',
  templateUrl: './payment-receipt.component.html',
  styleUrls: ['./payment-receipt.component.scss']
})
export class PaymentReceiptComponent implements OnInit {
  success: boolean;

  constructor(
    public dialogRef: MatDialogRef<PaymentReceiptComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.success = data.success;
  }

  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}

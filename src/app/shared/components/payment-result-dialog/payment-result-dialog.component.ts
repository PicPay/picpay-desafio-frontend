import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface PaymentResultDialogData {
  success: boolean;
}

@Component({
  selector: 'app-payment-result-dialog',
  templateUrl: './payment-result-dialog.component.html',
  styleUrls: ['./payment-result-dialog.component.scss'],
})
export class PaymentResultDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PaymentResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentResultDialogData
  ) {}

  ngOnInit() {}
}

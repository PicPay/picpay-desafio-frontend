import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-receipt',
  templateUrl: './payment-receipt.component.html',
  styleUrls: ['./payment-receipt.component.scss']
})
export class PaymentReceiptComponent implements OnInit {
  success: boolean

  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.success = data.success;
  }

  ngOnInit() {
  }

}

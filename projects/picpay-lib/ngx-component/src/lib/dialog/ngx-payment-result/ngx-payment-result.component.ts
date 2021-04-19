import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPaymentTransactionResult } from '@picpay-lib/ngx-domain';

@Component({
  selector: 'ngx-payment-result',
  templateUrl: './ngx-payment-result.component.html',
})
export class NgxPaymentResultComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public paymentTransactionResult: IPaymentTransactionResult) {}
}

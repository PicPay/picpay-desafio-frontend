import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-result',
  templateUrl: './paymentResult.component.html',
  styleUrls: ['./paymentResult.component.scss']
})

export class PaymentResultComponent implements OnInit {
  @Input() success;

  constructor() { }

  ngOnInit() {
  }

}

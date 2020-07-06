import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.scss']
})
export class ConfirmPaymentComponent implements OnInit {

  @Input() card: any
  @Input() isApproved: boolean

  constructor() { }

  ngOnInit() {
  }

}

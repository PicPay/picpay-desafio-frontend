import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['../users-pay-dialog.component.scss']
})
export class ConfirmPaymentComponent {

  @Input() card: any
  @Input() isApproved: boolean
}

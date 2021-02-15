import { Component, HostBinding } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PaymentModalComponent } from '../../payment-modal.component';

@Component({
  selector: 'app-payment-error',
  templateUrl: './payment-error.component.html',
  styleUrls: ['./payment-error.component.scss'],
})
export class PaymentErrorComponent {
  @HostBinding('class.payment-error-container')
  paymentContainer = true;

  constructor(private matDialog: MatDialogRef<PaymentModalComponent>) {}

  closeModal() {
    this.matDialog.close();
  }
}

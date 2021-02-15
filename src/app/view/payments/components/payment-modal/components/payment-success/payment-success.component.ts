import { Component, HostBinding } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PaymentModalComponent } from '../../payment-modal.component';
import { UserStateService } from '../../user-state.service';
import { User } from 'src/app/core/interfaces/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
})
export class PaymentSuccessComponent {
  @HostBinding('class.payment-success-container')
  paymentContainer = true;
  user: User;
  paymentValue: Observable<string>;

  constructor(
    private matDialog: MatDialogRef<PaymentModalComponent>,
    private userStore: UserStateService,
  ) {
    this.getPaymentStateData();
}

  getPaymentStateData() {
    this.userStore.getUserSelectedForPayment().subscribe((user) => {
      this.user = user;
    });

    this.paymentValue = this.userStore.getPaymentValue();
  }

  closeModal() {
    this.matDialog.close();
  }
}

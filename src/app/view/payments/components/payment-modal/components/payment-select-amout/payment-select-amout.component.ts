import { Component } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';
import { formatNumberToCurrency } from 'src/app/data/utils/data-format.util';
import { PaymentStepService } from '../../payment-step.service';
import { UserStateService } from '../../user-state.service';

@Component({
  selector: 'app-payment-select-amount',
  templateUrl: './payment-select-amout.component.html',
  styleUrls: ['./payment-select-amout.component.scss'],
})
export class PaymentSelectAmoutComponent {
  value = '100';
  user: User;

  constructor(private paymentStep: PaymentStepService, private userState: UserStateService) {
    this.value = formatNumberToCurrency(this.value);

    this.userState.getUserSelectedForPayment().subscribe((user) => {
      this.user = user;
    });
  }

  setActiveStep() {
    this.userState.setPaymentValue(this.value);

    this.paymentStep.setActiveStep('confirmData');
  }

  handleValueFormat({ value }) {
    this.value = formatNumberToCurrency(value);
  }
}

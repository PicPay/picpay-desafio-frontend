import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { fadeIn } from 'src/app/shared/animations/fade.animations';
import { PaymentStepService } from './services/payment-step.service';
import { UserStateService } from './services/user-state.service';

type stepType = 'selectAmount' | 'confirmData' | 'success' | 'error';

/**
 * This class represents the PaymentModalComponent and it renders the all payment components.
 */
@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
  animations: [fadeIn]
})
export class PaymentModalComponent implements OnDestroy {
  activeStep: Observable<stepType>;

  constructor(
    private paymentStep: PaymentStepService,
    @Inject(MAT_DIALOG_DATA) private data: { user: User },
    private userState: UserStateService
  ) {
    this.activeStep = this.paymentStep.getActiveStep();

    this.userState.setUSerSelectedForPayment(this.data.user);
  }

  ngOnDestroy() {
    this.paymentStep.setActiveStep('selectAmount');
  }
}

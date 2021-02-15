import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PaymentsUsecasesService } from 'src/app/data/usecases/payments/payments-usecases.service';
import { PaymentStepService } from './payment-step.service';
import { User } from 'src/app/core/interfaces/user.interface';
import { TransactionPayload } from 'src/app/core/interfaces/transaction-payload.interface';
import { UserStateService } from './user-state.service';

type stepType = 'selectAmount' | 'confirmData' | 'success' | 'error';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
})
export class PaymentModalComponent implements OnDestroy {
  activeStep: Observable<stepType>;

  constructor(
    private paymentStep: PaymentStepService,
    @Inject(MAT_DIALOG_DATA) private data: { user: User },
    private paymentsUsecases: PaymentsUsecasesService,
    private userState: UserStateService,
  ) {
    this.activeStep = this.paymentStep.getActiveStep();

    this.userState.setUSerSelectedForPayment(this.data.user);

    const payload: TransactionPayload = {
      card_number: '212121',
      cvv: 212,
      expiry_date: '323',

      destination_user_id: 323,

      value: 2332,
    };

    this.sendPayment(payload)
    .subscribe((resp) => console.log('transaction', resp));

  }

  sendPayment(payload) {
    return this.paymentsUsecases
      .sendMoney<TransactionPayload>(payload)
  }

  ngOnDestroy() {
    this.paymentStep.setActiveStep('selectAmount');
  }
}

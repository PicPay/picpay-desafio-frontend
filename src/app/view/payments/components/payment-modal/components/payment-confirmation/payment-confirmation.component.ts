import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { TransactionPayload } from 'src/app/core/interfaces/transaction-payload.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { PaymentsUsecasesService } from 'src/app/data/usecases/payments/payments-usecases.service';
import { formatCardNumberMask, formatNumberToCurrency } from 'src/app/data/utils/data-format.util';
import { fadeIn } from 'src/app/shared/animations/fade.animations';
import { PaymentStepService } from '../../payment-step.service';
import { UserStateService } from '../../user-state.service';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss'],
  animations: [fadeIn],
})
export class PaymentConfirmationComponent implements OnInit {
  value = '100';
  disabled = true;
  loadingPayment = false;
  confirmationForm: FormGroup;
  creditCardList: any[];
  user: User;

  constructor(
    private paymentStep: PaymentStepService,
    private userStore: UserStateService,
    private paymentUsecases: PaymentsUsecasesService
  ) {}

  ngOnInit() {
    this.creditCardList = formatCardNumberMask(this.userStore.userCreditCards);

    this.userStore.getUserSelectedForPayment().subscribe((user) => {
      this.user = user;
    });

    this.userStore.getPaymentValue().subscribe((res) => {
      this.value = res;
    });

    this.confirmationForm = new FormGroup({
      paymentAmount: new FormControl(
        { value: this.value, disabled: this.disabled },
        { validators: [Validators.required] }
      ),
      creditCard: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  handleValueEdition() {
    this.disabled = !this.disabled;

    if (this.disabled) {
      this.confirmationForm.controls.paymentAmount.enable();

      return;
    }

    this.confirmationForm.controls.paymentAmount.disable();
  }


  handleInputMask({ value }) {
    this.confirmationForm.controls.paymentAmount.setValue(formatNumberToCurrency(value));
  }

  changePaymentStep() {
    this.userStore.setPaymentValue(this.confirmationForm.controls.paymentAmount.value);

    const selectedCard = this.creditCardList.find(
      (card) => card.card_number === this.confirmationForm.controls.creditCard.value
    );
    delete selectedCard.numberView;
    this.userStore.setCardSelectedForPayment(selectedCard);

    const payload: TransactionPayload = {
      ...selectedCard,
      value: this.confirmationForm.controls.paymentAmount.value,
      destination_user_id: this.user.id,
    };

    this.loadingPayment = true;

    this.paymentUsecases
      .sendMoney(payload)
      .pipe(finalize(() => (this.loadingPayment = false)))
      .subscribe(
        () => this.paymentStep.setActiveStep('success'),
        () => this.paymentStep.setActiveStep('error')
      );
  }
}

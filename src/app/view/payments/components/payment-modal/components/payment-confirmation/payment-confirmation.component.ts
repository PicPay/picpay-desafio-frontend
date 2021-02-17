import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { TransactionPayload } from 'src/app/core/interfaces/transaction-payload.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { creditCard } from 'src/app/core/types/credit-card.type';
import { PaymentsUsecasesService } from 'src/app/data/usecases/payments/payments-usecases.service';
import { DataFormatService } from 'src/app/data/utils/data-format.service';
import { fadeIn } from 'src/app/shared/animations/fade.animations';
import { PaymentStepService } from '../../services/payment-step.service';
import { UserStateService } from '../../services/user-state.service';

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
  creditCardList: creditCard[];
  user: User;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private paymentStep: PaymentStepService,
    private userStore: UserStateService,
    private paymentUsecases: PaymentsUsecasesService,
    private dataFormat: DataFormatService
  ) {}

  ngOnInit(): void {
    this.getUserDataFromState();

    this.createForm();
  }

  /**
   * Method that gets all need information from user state.
   */
  getUserDataFromState(): void {
    this.creditCardList = this.dataFormat.formatCardNumberMask(this.userStore.userCreditCards);

    this.userStore
      .getUserSelectedForPayment()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.user = user;
      });

    this.userStore
      .getPaymentValue()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.value = this.dataFormat.formatNumberToCurrency(res);
      });
  }

  /**
   * Method that create the modal form.
   */
  createForm(): void {
    this.confirmationForm = new FormGroup({
      paymentAmount: new FormControl(this.value, { validators: [Validators.required] }),
      creditCard: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  /**
   * Method that handles the disabled status of the input component for editing payment amount.
   */
  handleValueEdition(): void {
    this.disabled = !this.disabled;
  }

  /**
   * Method that transforms the value inputted to currency.
   * @param value to be formatted.
   */
  handleInputMask({ value }): void {
    this.confirmationForm.controls.paymentAmount.setValue(
      this.dataFormat.formatNumberToCurrency(value)
    );
    this.userStore.setPaymentValue(this.confirmationForm.controls.paymentAmount.value);
  }

  /**
   * Method that handles payment's state data.
   * @returns the payment payload.
   */
  handlePaymentStateData(): TransactionPayload {
    const selectedCard: any = this.creditCardList.find(
      (card) => card.card_number === this.confirmationForm.controls.creditCard.value
    );

    const payload: TransactionPayload = {
      ...selectedCard,
      value: this.confirmationForm.controls.paymentAmount.value,
      destination_user_id: this.user.id,
    };

    return payload;
  }

  /**
   * Method executes the payment HTTP request and send payment.
   */
  sendPayment(): void {
    const payload = this.handlePaymentStateData();

    this.loadingPayment = true;

    this.paymentUsecases
      .sendMoney(payload)
      .pipe(tap(() => (this.loadingPayment = false)))
      .subscribe(
        () => this.paymentStep.setActiveStep('success'),
        () => this.paymentStep.setActiveStep('error')
      );
  }
}

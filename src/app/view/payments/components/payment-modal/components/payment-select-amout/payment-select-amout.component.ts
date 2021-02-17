import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/core/interfaces/user.interface';
import { DataFormatService } from 'src/app/data/utils/data-format.service';
import { PaymentStepService } from '../../services/payment-step.service';
import { UserStateService } from '../../services/user-state.service';

/**
 * This class represents the PaymentSelectAmoutComponent and it handles the payment amount to be send.
 *
 */
@Component({
  selector: 'app-payment-select-amount',
  templateUrl: './payment-select-amout.component.html',
  styleUrls: ['./payment-select-amout.component.scss'],
})
export class PaymentSelectAmoutComponent implements OnInit {
  value = '100';
  user: User;
  selectAmountForm: FormGroup;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private paymentStep: PaymentStepService,
    private userState: UserStateService,
    private dataFormat: DataFormatService
  ) {}

  ngOnInit(): void {
    this.value = this.dataFormat.formatNumberToCurrency(this.value);

    this.userState
      .getUserSelectedForPayment()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.user = user;
      });

    this.selectAmountForm = new FormGroup({
      paymentAmount: new FormControl(this.value, { validators: [Validators.required] }),
    });

    this.userState.setPaymentValue(this.selectAmountForm.controls.paymentAmount.value);
  }

  /**
   * Method that changes the payment step to data confirmation.
   */
  setActiveStep(): void {
    this.paymentStep.setActiveStep('confirmData');
  }

  /**
   * Method that transforms the value inputted to currency.
   * @param value to be formatted.
   */
  handleValueFormat({ value }): void {
    this.selectAmountForm.controls.paymentAmount.setValue(
      this.dataFormat.formatNumberToCurrency(value)
    );
    this.userState.setPaymentValue(this.selectAmountForm.controls.paymentAmount.value);
  }
}

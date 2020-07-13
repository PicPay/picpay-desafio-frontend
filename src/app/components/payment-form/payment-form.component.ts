import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { checkMinAmount, checkIfValueIsZero } from '../../utils/customValidations';
import { CreditCard } from '../../interfaces/credit-card';
import { Payment, PaymentResult } from 'src/app/interfaces/payment';
import { User } from 'src/app/interfaces/user';
import { CreditCardService } from '../../services/credit-card.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit, OnDestroy {
  // MISC
  private minimumAmount = 1; // Should this be an env variable?
  public loadingCards = true;
  public loadingPayment = false;

  // Models
  public cards: CreditCard[];
  @Input() user: User;

  // Form controls
  public paymentForm: FormGroup;
  public submitted = false;

  // Unsubscribe subject
  private readonly unsubscribe$ = new Subject<void>();

  // Callback function when the transaction is completed
  @Output() submitCallback = new EventEmitter<PaymentResult>();

  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private cardService: CreditCardService
  ) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      amount: ['', [checkIfValueIsZero(), checkMinAmount(this.minimumAmount)]],
      card: ['', Validators.required]
    });

    if (!this.cards) {
      this.getCreditCards();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getCreditCards(): void {
    this.cardService.getCards()
    .pipe(takeUntil(this.unsubscribe$))
      .subscribe(cards => {
        this.cards = cards;
        this.loadingCards = false;
      });
  }

  getPaymentPayload(form: any): Payment {
    const paymentModel: Payment = {
      ...this.cards[form.card],
      destination_user_id: this.user.id,
      value: form.amount
    };

    return paymentModel;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.paymentForm.invalid) {
      return;
    }

    // Web service call
    this.loadingPayment = true;
    this.paymentService.makePayment(this.getPaymentPayload(this.paymentForm.value))
    .pipe(takeUntil(this.unsubscribe$))
      .subscribe(paymentResult => {
        this.submitCallback.emit(paymentResult as PaymentResult);
      });
  }

  // Getter for easy access to form fields
  get form() { return this.paymentForm.controls; }
}

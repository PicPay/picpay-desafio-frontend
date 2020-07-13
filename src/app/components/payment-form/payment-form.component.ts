import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { checkMinAmount, checkIfValueIsZero } from '../../utils/customValidations';
import { CreditCard } from '../../interfaces/credit-card';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  private minimumAmount = 1; // Should this be an env variable?

  // Cards model
  public cards: CreditCard[];

  // Form controls
  public paymentForm: FormGroup;
  public submitted = false;

  // Unsubscribe subject
  private readonly unsubscribe$ = new Subject<void>();

  // Callback function when the transaction is completed
  @Output() submitCallback = new EventEmitter<MouseEvent>();

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CreditCardService
  ) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      amount: ['', [checkIfValueIsZero(), checkMinAmount(this.minimumAmount)]],
      card: ['', Validators.required]
    });

  }

  getCreditCards(): void {
    this.cardService.getCards()
      .subscribe()
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.paymentForm.invalid) {
      return;
    }

    // display form values on success
    console.log('form', this.paymentForm.value);
  }

  // Getter for easy access to form fields
  get form() { return this.paymentForm.controls; }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { checkMinAmount, checkIfValueIsZero } from '../../utils/customValidations';
import { CreditCard } from '../../interfaces/credit-card';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  private minimumAmount = 1; // Should this be an env variable?
  public paymentForm: FormGroup;
  public submitted = false;

  @Output() submitCallback = new EventEmitter<MouseEvent>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      amount: ['', [checkIfValueIsZero(), checkMinAmount(this.minimumAmount)]],
      card: ['', Validators.required]
    });
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

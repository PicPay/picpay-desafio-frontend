import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPaymentComponent } from './form-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Last4DigitsPipe } from 'src/app/pipes/card.pipe';

@NgModule({
  declarations: [
    FormPaymentComponent,
    Last4DigitsPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    FormPaymentComponent,
  ],
  exports: [
    FormPaymentComponent,
  ]
})
export class FormPaymentModule { }

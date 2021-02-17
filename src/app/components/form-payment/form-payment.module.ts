import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPaymentComponent } from './form-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Last4DigitsPipe } from '../../pipes/card.pipe';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    FormPaymentComponent,
    Last4DigitsPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
  ],
  entryComponents: [
    FormPaymentComponent,
  ],
})
export class FormPaymentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CurrencyMaskModule } from 'ngx-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ngx-currency-mask/src/currency-mask.config';

import { PaymentsComponent } from './payments.component';
import { ModalPaymentComponent } from './modal-payment/modal-payment.component';
import { ModalPaymentResultTransactionComponent } from './modal-payment-result-transaction/modal-payment-result-transaction.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  allowZero: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
};

@NgModule({
  declarations: [PaymentsComponent, ModalPaymentComponent, ModalPaymentResultTransactionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
  ],
  exports: [PaymentsComponent],
  providers: [
    HttpClientModule,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class PaymentsModule { }

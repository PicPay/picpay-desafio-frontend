import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  CurrencyMaskConfig,
  CurrencyMaskModule,
  CURRENCY_MASK_CONFIG
} from "ng2-currency-mask";

import { PaymentService } from './services/payment.service';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
import { PaymentReceiptModalComponent } from './components/payment-receipt-modal/payment-receipt-modal.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  prefix: 'R$ ',
  thousands: '.',
  decimal: ',',
  align: 'left',
  allowNegative: false,
  precision: 2,
  suffix: "",
};

@NgModule({
  declarations: [
    PaymentModalComponent,
    PaymentReceiptModalComponent,
    UserListComponent,
  ],
  providers: [
    PaymentService,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  exports:[
    PaymentModalComponent,
    PaymentReceiptModalComponent,
    UserListComponent
  ]
})
export class SharedModule { }

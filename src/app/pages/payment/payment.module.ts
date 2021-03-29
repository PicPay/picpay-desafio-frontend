import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCurrencyModule, CurrencyMaskInputMode } from 'ngx-currency';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { CreditCardsModule } from '@shared/components/credit-cards/credit-cards.module';
import { ButtonPayModule } from '@shared/components/button-pay/button-pay.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayingScreenModule } from '@shared/components/paying-screen/paying-screen.module';

export const customCurrencyMaskConfig = {
  align: '',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: false,
  min: 0,
  max: 99999.99,
  inputMode: CurrencyMaskInputMode.FINANCIAL,
};

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CreditCardsModule,
    ButtonPayModule,
    PayingScreenModule.forRoot(),
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
})
export class PaymentModule {}

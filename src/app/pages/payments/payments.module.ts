import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { CardPaymentModule } from '@shared/components/card-payment/card-payment.module';

@NgModule({
  declarations: [PaymentsComponent],
  imports: [CommonModule, PaymentsRoutingModule, CardPaymentModule],
})
export class PaymentsModule {}

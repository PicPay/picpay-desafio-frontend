import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';

@NgModule({
  declarations: [PaymentComponent],
  imports: [CommonModule, PaymentRoutingModule],
})
export class PaymentModule {}

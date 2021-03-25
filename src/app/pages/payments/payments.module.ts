import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { CardPaidModule } from '@shared/components/card-paid/card-paid.module';

@NgModule({
  declarations: [PaymentsComponent],
  imports: [CommonModule, PaymentsRoutingModule, CardPaidModule],
})
export class PaymentsModule {}

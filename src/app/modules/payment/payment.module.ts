import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-route.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    UsersComponent,
    PaymentComponent,
    CheckoutComponent,
  ],
  imports: [
    PaymentRoutingModule,
    CommonModule,
    NgxCurrencyModule
  ],
  exports: [PaymentComponent]
})
export class PaymentModule { }

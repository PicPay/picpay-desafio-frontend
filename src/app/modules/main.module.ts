import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { UsersService } from '../core/http';
import { CurrencyMaskDirective } from '../shared/directives/currency-mask.directive';
import { CardFilterPipe } from '../shared/pipes/card-filter.pipe';
import { ConfirmPaymentComponent } from './confirm-payment/confirm-payment.component';
import { PaymentComponent } from './payment/payment.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    UsersComponent,
    CardFilterPipe,
    CurrencyMaskDirective,
    PaymentComponent,
    ConfirmPaymentComponent
  ],
  exports: [UsersComponent],
  providers: [UsersService]
})

export class MainModule { }
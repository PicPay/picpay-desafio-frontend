import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CardFilterPipe } from './shared/pipes/card-filter.pipe';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { CurrencyMaskDirective } from './shared/directives/currency-mask.directive';
import { PaymentComponent } from './modules/payment/payment.component';
import { UsersComponent } from './modules/users/users.component';
import { ConfirmPaymentComponent } from './modules/confirm-payment/confirm-payment.component';
import { UsersService } from './core/http';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PaymentComponent,
    CardFilterPipe,
    CurrencyMaskDirective,
    ConfirmPaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [UsersService, CurrencyPipe],
  entryComponents: [PaymentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

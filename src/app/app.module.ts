import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users/service/users.service';
import { UsersPayDialogComponent } from './users/users-pay-dialog/users-pay-dialog.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CardFilterPipe } from './users/pipes/card-filter.pipe';
import { FormsModule }   from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { CurrencyMaskDirective } from './users/directives/currency-mask.directive';
import { ConfirmPaymentComponent } from './users/users-pay-dialog/confirm-payment/confirm-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersPayDialogComponent,
    CardFilterPipe,
    CurrencyMaskDirective,
    ConfirmPaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [UsersService, UsersPayDialogComponent, CurrencyPipe],
  entryComponents: [UsersPayDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

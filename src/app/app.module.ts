import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/users/user-card/user-card.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { TransactionCardComponent } from './components/transaction/transaction-card/transaction-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './shared/services/user.service';
import { TransactionService } from './shared/services/transaction.service';
import { ReceiptCardComponent } from './components/transaction/receipt-card/receipt-card.component';
import { CreditCardComponent } from './components/transaction/credit-card/credit-card.component';

export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: false,
  min: 0,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UsersListComponent,
    TransactionCardComponent,
    ReceiptCardComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    ToastrModule.forRoot({ preventDuplicates: true })
  ],
  providers: [
    UserService,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

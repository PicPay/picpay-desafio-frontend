import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardComponent } from './components/users/user-card/user-card.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { TransactionCardComponent } from './components/transaction/transaction-card/transaction-card.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";

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
    TransactionCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

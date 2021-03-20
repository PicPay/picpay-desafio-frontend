import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrlCurrencyMaskDirective } from './util/directives/brl-currency-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    TransactionComponent,
    BrlCurrencyMaskDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

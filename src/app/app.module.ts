import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { PaymentReceiptComponent } from './components/transaction/payment-receipt/payment-receipt.component';
import { CreditcardListComponent } from './components/transaction/creditcard-list/creditcard-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransactionComponent,
    PaymentReceiptComponent,
    CreditcardListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

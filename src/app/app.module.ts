import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { PaymentReceiptComponent } from './components/transaction/payment-receipt/payment-receipt.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransactionComponent,
    PaymentReceiptComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TransactionComponent, 
    PaymentReceiptComponent
  ],
})
export class AppModule { }

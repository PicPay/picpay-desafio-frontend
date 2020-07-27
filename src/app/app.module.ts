import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PaymentComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  providers: [
    UserService,
    NgbActiveModal,
    [CurrencyPipe, {
      provide: LOCALE_ID,
      useValue: "en-US"
    }]
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    PaymentComponent,
    ReceiptComponent
  ]
})
export class AppModule { }

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ModalBaseComponent } from './components/modal-base/modal-base.component';
import { UserPaymentComponent } from './components/user-payment/user-payment.component';
import { UserComponent } from './components/user/user.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TransactionResultComponent } from './components/transaction-result/transaction-result.component';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListUsersComponent,
    UserPaymentComponent,
    ModalBaseComponent,
    LoaderComponent,
    TransactionResultComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    CurrencyMaskModule,
    ReactiveFormsModule
  ],

  exports: [
    UserPaymentComponent,
    TransactionResultComponent
  ],

  entryComponents: [
    UserPaymentComponent,
    TransactionResultComponent
  ],

  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

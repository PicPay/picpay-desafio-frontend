import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TransactionComponent } from './components/transaction/transaction.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './components/template/modal/';
import { MatInputModule } from '@angular/material/input';
import { UserPictureComponent } from './components/user-picture/user-picture.component';
import { UsernameComponent } from './components/username/username.component';
import { CurrencyPipe } from '@angular/common';
import { CardNumberPipe } from './components/pipes/card-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PaymentFormComponent,
    HeaderComponent,
    TransactionComponent,
    MessageComponent,
    UserPictureComponent,
    UsernameComponent,
    CardNumberPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatInputModule
  ],
  providers: [CurrencyPipe, {
    provide: LOCALE_ID,
    useValue: "en-US"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MatSelectModule } from '@angular/material/select';
import { TransformCardNumber } from './components/pipes/transform-card-number.pipe';
import { UserPictureComponent } from './components/user-picture/user-picture.component';
import { UsernameComponent } from './components/username/username.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PaymentFormComponent,
    HeaderComponent,
    TransactionComponent,
    MessageComponent,
    TransformCardNumber,
    UserPictureComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [CurrencyPipe, {
    provide: LOCALE_ID,
    useValue: "en-US"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

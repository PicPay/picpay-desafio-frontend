import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { PayModalComponent } from './components/pay-modal/pay-modal.component';
import { PayUsersComponent } from './components/pay-users/pay-users.component';
import { PayUserComponent } from './components/pay-users/pay-user/pay-user.component';
import { PayMessageComponent } from './components/pay-message/pay-message.component';

import { PayUserService } from './services/pay-users.service';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PayModalComponent,
    PayUsersComponent,
    PayUserComponent,
    PayMessageComponent,
    CurrencyFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AppComponent,
    PayModalComponent,
    PayUsersComponent,
    PayUserComponent,
    PayMessageComponent
  ],
  providers: [
    PayUserService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

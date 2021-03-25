import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './public/components/card/card.component';
import { UsersComponent } from './public/components/users/users.component';
import { PaymentComponent } from './public/components/payment/payment.component';
import { ModalComponent } from './public/modal/modal.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AppRoutingModule } from './app-routing.module';

import { UsersService } from './services/users.service';
import { PaymentService } from './services/payment.service';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UsersComponent,
    PaymentComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,
    AppRoutingModule
  ],
  providers: [UsersService, PaymentService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule { }

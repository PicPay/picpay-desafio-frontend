import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardPaymentService } from './card-payment/card-payment.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardPaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CardPaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

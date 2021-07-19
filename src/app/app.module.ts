import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardPaymentComponent, Alert } from './card-payment/card-payment.component';
import { CardPaymentService } from './card-payment/service/card-payment.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CardPaymentComponent,
    Alert
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    CardPaymentService,
  ],
  entryComponents: [Alert],
  bootstrap: [AppComponent]
})
export class AppModule { }

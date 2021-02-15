import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';

import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './components/modal/modal.module';
import { FormPaymentModule } from './components/form-payment/form-payment.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OverlayModule,
    ModalModule,
    FormPaymentModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

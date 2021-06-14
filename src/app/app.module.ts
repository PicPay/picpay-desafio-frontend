import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxLoadingModule } from 'ngx-loading';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPaymentComponent } from './components/modal-payment/modal-payment.component';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { CurrencyMaskModule } from 'ngx-currency-mask';
import { ModalResultComponent } from './components/modal-result/modal-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPaymentComponent,
    ModalResultComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CurrencyMaskModule
  ],
  entryComponents: [
    ModalPaymentComponent,
    ModalResultComponent
  ],
  providers: [
    FormBuilder,
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

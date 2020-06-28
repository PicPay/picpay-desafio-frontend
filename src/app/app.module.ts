import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxCurrencyModule } from "ngx-currency";
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    PaymentModalComponent,
    ModalSuccessComponent,
    ModalErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    ModalModule.forRoot()
  ],
   exports:[
    HeaderComponent,
  ],
  entryComponents:[
    ModalSuccessComponent,
    ModalErrorComponent,
    PaymentModalComponent ],
    providers: [
      BsModalRef,
      { provide: LOCALE_ID, useValue: 'pt-BR' }    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

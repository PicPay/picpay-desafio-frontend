import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaymentComponent } from './components/payment/payment.component';
import { MaskCard } from './pipes/mask-card.pipe';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { ErrorsInputModule } from './components/errors-input/errors-input.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { CustomCurrencyMaskConfig } from './models/currency';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { InterceptorService } from './services/intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    MaskCard,
    SpinnerComponent,
    ModalAlertComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CurrencyMaskModule,
    ErrorsInputModule,
    Ng2IziToastModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  ],
  bootstrap: [AppComponent],
  entryComponents: [PaymentComponent, ModalAlertComponent],
})
export class AppModule {}

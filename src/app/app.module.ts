import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentDialogComponent } from './components/payment-dialog/payment-dialog.component';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { customCurrencyMaskConfig } from './configs/curency-mask';
import { ErrorsInputModule } from './components/errors-input/errors-input.module';

@NgModule({
  declarations: [AppComponent, PaymentDialogComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CurrencyMaskModule,
    ErrorsInputModule,
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig },
  ],
  bootstrap: [AppComponent],
  entryComponents: [PaymentDialogComponent],
})
export class AppModule {}

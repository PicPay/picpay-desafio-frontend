import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentDialogComponent } from './components/payment-dialog/payment-dialog.component';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { customCurrencyMaskConfig } from './configs/curency-mask';
import { customNgxToastrConfig } from './configs/ngx-toastr';
import { ErrorsInputModule } from './components/errors-input/errors-input.module';
import { ToastrModule } from 'ngx-toastr';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { LoadingModule } from './components/loading/loading.module';
import { InterceptorService } from './services/http-interceptor/interceptor.service';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDialogComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CurrencyMaskModule,
    LoadingModule,
    ErrorsInputModule,
    ToastrModule.forRoot(customNgxToastrConfig),
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PaymentDialogComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
  ],
  exports: [SuccessDialogComponent, ErrorDialogComponent],
})
export class AppModule {}

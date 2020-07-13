import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ButtonCommonComponent } from './components/button-common/button-common.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AppRoutingModule } from './app-routing.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PaymentFormComponent,
    ButtonCommonComponent,
    UserCardComponent,
    AvatarComponent,
    PaymentComponent,
    SpinnerComponent
  ],
  imports: [
    HttpClientModule,
    NgxCurrencyModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

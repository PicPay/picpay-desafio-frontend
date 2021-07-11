import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PaymentModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

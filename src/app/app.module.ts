import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceiptModalComponent } from './components/receipt-modal/receipt-modal.component';
import { CaseInterceptor } from './interceptors/case.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    ModalContainerComponent,
    PaymentModalComponent,
    ReceiptModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCurrencyModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CaseInterceptor, multi: true }
  ],
  entryComponents: [ 
    ModalContainerComponent,
    PaymentModalComponent,
    ReceiptModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

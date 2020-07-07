import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal, NgbModal, NgbModule, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { UserSelectComponent } from './components/userSelect/userSelect.component';
import { UsersListComponent } from './components/usersList/usersList.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaymentFieldsComponent } from './components/paymentFields/paymentFields.component';
import { PaymentResultComponent } from './components/paymentResult/paymentResult.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PaymentFieldsComponent,
    PaymentResultComponent,
    UsersListComponent,
    UserSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [
    ApiService,
    NgbActiveModal
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
  ]
})

export class AppModule { }

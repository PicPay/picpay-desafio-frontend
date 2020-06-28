import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    ModalModule.forRoot()
  ],
  providers: [],
  exports:[
    HeaderComponent,
  ],
  entryComponents:[
    ModalSuccessComponent,
    ModalErrorComponent,
    PaymentModalComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

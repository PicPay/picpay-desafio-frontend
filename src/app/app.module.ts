import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent } from './public/components/card/card.component';
import { UsersComponent } from './public/components/users/users.component';
import { PaymentBoxComponent } from './public/components/payment/payment.component';
import { ModalComponent } from './public/modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UsersComponent,
    PaymentBoxComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

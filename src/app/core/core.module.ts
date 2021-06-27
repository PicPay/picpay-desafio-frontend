import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { ModalPaymentComponent } from './components/modals/modal-payment/modal-payment.component';
import { ModalPaymentResponseComponent } from './components/modals/modal-payment-response/modal-payment-response.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    UsersComponent,
    ModalPaymentComponent,
    ModalPaymentResponseComponent,
  ],
  imports: [CommonModule],
})
export class CoreModule {}

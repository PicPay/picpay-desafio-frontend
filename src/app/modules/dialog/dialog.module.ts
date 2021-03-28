import { SharedModule } from './../shared/shared.module';
import { DialogComponent } from './dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCurrencyModule } from 'ngx-currency';



@NgModule({
  declarations: [
    DialogComponent,
    MessageModalComponent,
    PaymentModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCurrencyModule,
    SharedModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }

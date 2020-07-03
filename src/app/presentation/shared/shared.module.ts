import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, PaymentModule, UserModule } from './components';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    PaymentModule,
    UserModule
  ],
  exports: [
    DialogModule,
    PaymentModule,
    UserModule
  ]
})
export class SharedModule { }

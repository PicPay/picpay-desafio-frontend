import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PaymentComponent } from './payment.component';

@NgModule({
  declarations: [UsersComponent, PaymentComponent],
  imports: [
    CommonModule
  ],
  exports: [PaymentComponent]
})
export class PaymentModule { }

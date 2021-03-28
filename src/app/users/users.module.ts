import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { UsersComponent } from './users.component';
import { PaymentModalComponent } from './user-dialog/payment-modal/payment-modal.component';
import { MessageModalComponent } from './user-dialog/message-modal/message-modal.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCurrencyModule } from 'ngx-currency';



@NgModule({
  declarations: [
    UsersComponent,
    UserContainerComponent,
    UserDialogComponent,
    MessageModalComponent,
    PaymentModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  exports: [
    UsersComponent,
    UserDialogComponent
  ]
})
export class UsersModule { }

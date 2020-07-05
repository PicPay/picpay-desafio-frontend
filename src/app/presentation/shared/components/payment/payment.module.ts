import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorFieldMessageModule } from '../validator-field-message/validator-field-message.module';
import { ButtonModule } from '../button/button.module';
import { DialogModule } from '../dialog/dialog.module';



@NgModule({
  declarations: [PaymentComponent],
  exports: [PaymentComponent],
  entryComponents: [PaymentComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    ValidatorFieldMessageModule,
    ButtonModule,
    DialogModule
  ]
})
export class PaymentModule { }

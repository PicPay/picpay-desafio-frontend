import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorFieldMessageModule } from '../validator-field-message/validator-field-message.module';
import { ButtonModule } from '../button/button.module';
import { DialogModule } from '../dialog/dialog.module';
import { NgxCurrencyModule } from 'ngx-currency';

export const customCurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: true
};

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
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    ValidatorFieldMessageModule,
    ButtonModule,
    DialogModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ]
})
export class PaymentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { NgxPayToUserComponent } from './ngx-pay-to-user.component';
import { NgxPaymentResultModule } from '../ngx-payment-result';

@NgModule({
  declarations: [NgxPayToUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxPaymentResultModule,
    CurrencyMaskModule,
  ],
  exports: [NgxPayToUserComponent],
})
export class NgxPayToUserModule {}

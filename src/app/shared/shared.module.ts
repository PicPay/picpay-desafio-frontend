import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
} from '@angular/material';
import { PaymentDialogComponent } from './components/payment-dialog/payment-dialog.component';
import { PaymentResultDialogComponent } from './components/payment-result-dialog/payment-result-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskModule } from 'soft-angular-mask';

@NgModule({
  declarations: [PaymentDialogComponent, PaymentResultDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaskModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  entryComponents: [PaymentDialogComponent, PaymentResultDialogComponent],
  exports: [MatButtonModule, MatDividerModule, MatProgressSpinnerModule],
})
export class SharedModule {}

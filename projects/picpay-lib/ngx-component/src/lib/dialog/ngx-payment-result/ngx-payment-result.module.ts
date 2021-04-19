import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaymentResultComponent } from './ngx-payment-result.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NgxPaymentResultComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [NgxPaymentResultComponent],
})
export class NgxPaymentResultModule {}

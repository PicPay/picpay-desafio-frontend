import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';
import { MatDialogModule, MatToolbarModule } from '@angular/material';
import { PaymentModule } from '../payment/payment.module';


@NgModule({
  declarations: [DialogComponent],
  exports: [DialogComponent],
  entryComponents: [DialogComponent],
  providers: [DialogService],
  imports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    PaymentModule
  ]
})
export class DialogModule { }

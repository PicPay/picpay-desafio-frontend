import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';

@NgModule({
  declarations: [PaymentsComponent],
  exports: [PaymentsComponent],
  imports: [CommonModule],
})
export class PaymentsModule {}

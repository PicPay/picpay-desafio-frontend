import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPaymentComponent } from './card-payment.component';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';

import 'moment/locale/pt-br';

@NgModule({
  declarations: [CardPaymentComponent],
  exports: [CardPaymentComponent],
  imports: [CommonModule, RouterModule, MomentModule],
})
export class CardPaymentModule {}

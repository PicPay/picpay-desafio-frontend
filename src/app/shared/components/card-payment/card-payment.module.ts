import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardPaymentComponent } from './card-payment.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MomentModule } from 'ngx-moment';

import 'moment/locale/pt-br';

@NgModule({
  declarations: [CardPaymentComponent],
  exports: [CardPaymentComponent],
  imports: [CommonModule, RouterModule, MomentModule, NgxSkeletonLoaderModule],
})
export class CardPaymentModule {}

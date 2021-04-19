import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { NgxSkeletonUserCardComponent } from './ngx-skeleton-user-card.component';

@NgModule({
  declarations: [NgxSkeletonUserCardComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule],
  exports: [NgxSkeletonUserCardComponent],
})
export class NgxSkeletonUserCardModule {}

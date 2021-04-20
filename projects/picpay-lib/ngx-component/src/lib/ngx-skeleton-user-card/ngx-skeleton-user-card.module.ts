import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { NgxSkeletonUserCardComponent } from './ngx-skeleton-user-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NgxSkeletonUserCardComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule, MatCardModule],
  exports: [NgxSkeletonUserCardComponent],
})
export class NgxSkeletonUserCardModule {}

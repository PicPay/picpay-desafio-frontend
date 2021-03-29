import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user.component';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [CardUserComponent],
  exports: [CardUserComponent],
  imports: [CommonModule, RouterModule, NgxSkeletonLoaderModule],
})
export class CardUserModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPaidComponent } from './card-paid.component';

@NgModule({
  declarations: [CardPaidComponent],
  exports: [CardPaidComponent],
  imports: [CommonModule],
})
export class CardPaidModule {}

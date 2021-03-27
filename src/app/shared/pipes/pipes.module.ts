import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardTruncatePipe } from './credit-card-truncate.pipe';

@NgModule({
  declarations: [CreditCardTruncatePipe],
  imports: [CommonModule],
  exports: [CreditCardTruncatePipe],
})
export class PipesModule {}

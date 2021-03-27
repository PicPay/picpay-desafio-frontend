import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardsComponent } from './credit-cards.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { PicPayLogoModule } from '../picpay-logo/picpay-logo.module';

@NgModule({
  declarations: [CreditCardsComponent],
  exports: [CreditCardsComponent],
  imports: [CommonModule, PipesModule, PicPayLogoModule],
})
export class CreditCardsModule {}

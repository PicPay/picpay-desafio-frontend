import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user.component';

@NgModule({
  declarations: [CardUserComponent],
  exports: [CardUserComponent],
  imports: [CommonModule],
})
export class CardUserModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardUserComponent],
  exports: [CardUserComponent],
  imports: [CommonModule, RouterModule],
})
export class CardUserModule {}

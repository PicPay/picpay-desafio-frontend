import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user.component';

@NgModule({
  declarations: [
    CardUserComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardUserComponent,
  ],
})
export class CardUserModule { }

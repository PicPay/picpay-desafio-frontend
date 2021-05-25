import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { UserInfoModule } from './../user-info/user-info.module';



@NgModule({
  declarations: [CardComponent],
  imports: [
	CommonModule,
	UserInfoModule
	],
	exports: [CardComponent]
})
export class CardModule { }

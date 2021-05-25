import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';



@NgModule({
  declarations: [ModalComponent],
  imports: [
		CommonModule,
	],
	providers: [ModalService],
	exports: [ModalComponent]
})
export class ModalModule { }

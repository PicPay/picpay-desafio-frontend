import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ErrorDisplayComponent } from './error-display/error-display.component';



@NgModule({
  declarations: [
    ModalComponent,
    ErrorDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    ErrorDisplayComponent
  ]
})
export class SharedModule { }

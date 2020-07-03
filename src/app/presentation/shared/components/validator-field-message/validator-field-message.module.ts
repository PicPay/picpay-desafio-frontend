import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorFieldMessageComponent } from './validator-field-message.component';



@NgModule({
  declarations: [ValidatorFieldMessageComponent],
  exports: [ValidatorFieldMessageComponent],
  imports: [
    CommonModule
  ]
})
export class ValidatorFieldMessageModule { }

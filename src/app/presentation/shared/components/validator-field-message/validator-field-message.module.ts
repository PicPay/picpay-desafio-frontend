import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorFieldMessageComponent } from './validator-field-message.component';
import { MatFormFieldModule } from '@angular/material';



@NgModule({
  declarations: [ValidatorFieldMessageComponent],
  exports: [ValidatorFieldMessageComponent],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class ValidatorFieldMessageModule { }

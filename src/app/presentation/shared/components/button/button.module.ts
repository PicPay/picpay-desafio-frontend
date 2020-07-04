import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryDirective } from './button-primary.directive';
import { MatRippleModule } from '@angular/material';



@NgModule({
  declarations: [ButtonPrimaryDirective],
  exports: [ButtonPrimaryDirective],
  imports: [
    CommonModule,
    MatRippleModule
  ]
})
export class ButtonModule { }

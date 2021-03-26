import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPayComponent } from './button-pay.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonPayComponent],
  exports: [ButtonPayComponent],
  imports: [CommonModule],
})
export class ButtonPayModule {}

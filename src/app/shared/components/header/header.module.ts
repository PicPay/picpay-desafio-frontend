import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { PicPayLogoModule } from '../picpay-logo/picpay-logo.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule, PicPayLogoModule],
})
export class HeaderModule {}

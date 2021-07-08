import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './components/base-page/base-page.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';



@NgModule({
  declarations: [BasePageComponent, BaseModalComponent],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './components/base-page/base-page.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { MaterialBaseModule } from './material-base.module';

const components = [
  BasePageComponent,
  BaseModalComponent,
];

@NgModule({
  declarations: [
    [ ...components ],
  ],
  imports: [
    CommonModule,
    MaterialBaseModule,
  ],
  exports: [
    [ ...components ],
  ]
})
export class BaseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './components/base-page/base-page.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { HeaderComponent } from './components/base-page/components/header/header.component';
import { MaterialBaseModule } from './modules/material-base.module';
import { SharedModule } from '../shared/shared.module';

const components = [
  BasePageComponent,
  BaseModalComponent,
  HeaderComponent,
];

@NgModule({
  declarations: [
    [ ...components ],
  ],
  imports: [
    CommonModule,
    MaterialBaseModule,
    SharedModule,
  ],
  exports: [
    [ ...components ],
    MaterialBaseModule,
  ]
})
export class BaseModule { }

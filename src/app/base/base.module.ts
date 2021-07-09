import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './components/base-page/base-page.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { HeaderComponent } from './components/base-page/components/header/header.component';
import { MaterialBaseModule } from './material-base.module';
import { CardComponent } from './components/base-page/components/card/card.component';

const components = [
  BasePageComponent,
  BaseModalComponent,
  HeaderComponent,
  CardComponent,
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
    MaterialBaseModule,
  ]
})
export class BaseModule { }

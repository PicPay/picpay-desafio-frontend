import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SimpleMessageComponent } from './components/dialogs/simple-message/simple-message.component';
import { MaterialBaseModule } from '../base/modules/material-base.module';

const components = [
  CardComponent,
];

const dialogs = [
  SimpleMessageComponent,
];

@NgModule({
  declarations: [
    [...components],
    [...dialogs],
  ],
  imports: [
    CommonModule,
    MaterialBaseModule,
  ],
  exports: [
    [...components],
    [...dialogs],
  ],
  entryComponents: [
    [...dialogs],
  ],
})
export class SharedModule { }

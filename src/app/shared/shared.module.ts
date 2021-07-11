import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SimpleMessageComponent } from './components/dialogs/simple-message/simple-message.component';
import { MaterialBaseModule } from '../base/modules/material-base.module';
import { CreditCardNumberPipe } from './pipes/credit-card-number.pipe';

const components = [
  CardComponent,
];

const dialogs = [
  SimpleMessageComponent,
];

const pipes = [
  CreditCardNumberPipe
];

@NgModule({
  declarations: [
    [...components],
    [...dialogs],
    [...pipes],
  ],
  imports: [
    CommonModule,
    MaterialBaseModule,
  ],
  exports: [
    [...components],
    [...dialogs],
    [...pipes],
  ],
  entryComponents: [
    [...dialogs],
  ],
})
export class SharedModule { }

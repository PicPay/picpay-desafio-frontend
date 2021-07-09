import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';

const components = [
  CardComponent,
];

@NgModule({
  declarations: [
    [...components],
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    [...components],
  ]
})
export class SharedModule { }

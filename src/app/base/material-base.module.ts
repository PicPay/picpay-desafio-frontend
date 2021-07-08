import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatSidenavModule } from '@angular/material';

const modules = [
  MatIconModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [],
  imports: [
    [ ...modules ],
    CommonModule,
  ],
  exports: [
    [ ...modules ],
  ]
})
export class MaterialBaseModule { }

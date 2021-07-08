import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule, MatIconModule, MatSidenavModule } from '@angular/material';

const modules = [
  MatIconModule,
  MatSidenavModule,
  MatBadgeModule,
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

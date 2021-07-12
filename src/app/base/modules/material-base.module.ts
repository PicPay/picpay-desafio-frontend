import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatDialogModule,
  MatSlideToggleModule,
} from '@angular/material';

const modules = [
  MatIconModule,
  MatSidenavModule,
  MatBadgeModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatSlideToggleModule,
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

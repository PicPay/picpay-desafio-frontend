import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SkeletonDirective } from './skeleton.directive';



@NgModule({
  declarations: [HeaderComponent, SkeletonDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }

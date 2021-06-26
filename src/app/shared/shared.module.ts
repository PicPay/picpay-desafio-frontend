import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

const materialModules = [
  MatSliderModule
]


@NgModule({
  declarations: [],
  imports: [
  ...materialModules
  ],
  exports: [ 
  ...materialModules
  ]
})
export class SharedModule { }

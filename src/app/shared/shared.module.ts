import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorsInputComponent } from './components/errors-input/errors-input.component';
import { BrlCurrencyMaskDirective } from './directives/brl-currency-mask/brl-currency-mask.directive';


@NgModule({
  declarations: [
    BrlCurrencyMaskDirective,
    ErrorsInputComponent
  ],
  imports: [ 
    CommonModule
  ],
  exports: [
    BrlCurrencyMaskDirective,
    ErrorsInputComponent
  ]
})
export class SharedModule { }

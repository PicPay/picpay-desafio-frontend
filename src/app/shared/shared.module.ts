import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorsInputComponent } from './components/errors-input/errors-input.component';
import { BrlCurrencyMaskDirective } from './directives/brl-currency-mask/brl-currency-mask.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { LottieAnimationViewModule } from 'ng-lottie';


@NgModule({
  declarations: [
    BrlCurrencyMaskDirective,
    ErrorsInputComponent,
    LoadingComponent
  ],
  imports: [ 
    CommonModule,
    LottieAnimationViewModule.forRoot()
  ],
  exports: [
    BrlCurrencyMaskDirective,
    ErrorsInputComponent,
    LoadingComponent
  ]
})
export class SharedModule { }

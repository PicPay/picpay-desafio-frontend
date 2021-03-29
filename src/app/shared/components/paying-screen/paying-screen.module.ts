import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayingScreenComponent } from './paying-screen.component';
import { PayingScreenService } from './paying-screen.service';

@NgModule({
  imports: [CommonModule],
  declarations: [PayingScreenComponent],
  exports: [PayingScreenComponent],
  entryComponents: [PayingScreenComponent],
  providers: [PayingScreenService],
})
export class PayingScreenModule {
  static forRoot(): ModuleWithProviders<PayingScreenModule> {
    return {
      ngModule: PayingScreenModule,
      providers: [PayingScreenService],
    };
  }
}

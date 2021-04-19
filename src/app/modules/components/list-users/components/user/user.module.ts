import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { PayComponent } from '../.././../modal';
import { LoaderModule } from '../../../loader';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    UserComponent,
    PayComponent,
  ], 
  exports: [
    UserComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    LoaderModule,
    FormsModule, 
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  entryComponents: [PayComponent],

})

export class UserModule { }
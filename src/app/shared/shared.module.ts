import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxCurrencyModule, CurrencyMaskConfig } from "ngx-currency";

import { components } from "./components";
import { pipes } from "./pipes";

const currencyOptions: CurrencyMaskConfig = {
  prefix: "",
  align: "left",
  allowNegative: false,
  decimal: ",",
  thousands: ".",
  allowZero: true,
  precision: 2,
  suffix: "",
  nullable: false,
};

@NgModule({
  declarations: [...components, ...pipes],
  imports: [
    CommonModule,
    FormsModule,
    NgxCurrencyModule.forRoot(currencyOptions),
  ],
  exports: [
    // Vendor
    CommonModule,
    ReactiveFormsModule,
    NgxCurrencyModule,

    // Local
    ...components,
    ...pipes,
  ],
})
export class SharedModule {}

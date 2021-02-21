import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatDialogModule, MatProgressSpinnerModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";
import { PaymentModalComponent } from "./payment-modal/payment-modal.component";
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
export const customCurrencyMaskConfig = {
    align: "left",
    allowNegative: false,
    allowZero: false,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: ".",
    nullable: true,
    min: null,
    max: null,
    inputMode: CurrencyMaskInputMode.FINANCIAL
};
@NgModule({
    declarations: [ PaymentModalComponent, SuccessModalComponent, ErrorModalComponent ],
    imports: [ 
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
        MatProgressSpinnerModule
    ]
})
export class SharedModule {

}
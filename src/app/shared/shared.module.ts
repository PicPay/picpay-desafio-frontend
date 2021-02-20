import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxCurrencyModule } from "ngx-currency";
import { PaymentModalComponent } from "./payment-modal/payment-modal.component";
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
    declarations: [ PaymentModalComponent, SuccessModalComponent, ErrorModalComponent ],
    imports: [ 
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        NgxCurrencyModule
    ]
})
export class SharedModule {

}
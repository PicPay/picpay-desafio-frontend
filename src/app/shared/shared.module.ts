import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxCurrencyModule } from "ngx-currency";
import { PaymentModalComponent } from "./payment-modal/payment-modal.component";

@NgModule({
    declarations: [ PaymentModalComponent ],
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
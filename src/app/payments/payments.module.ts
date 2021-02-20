import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { UsersListComponent } from "./users-list/users-list.component";
import { SharedModule } from "../shared/shared.module";
import { PaymentModalComponent } from "../shared/payment-modal/payment-modal.component";
import { SuccessModalComponent } from "../shared/success-modal/success-modal.component";
import { ErrorModalComponent } from "../shared/error-modal/error-modal.component";

@NgModule({
    declarations:[ UsersListComponent ],
    imports: [  
        HttpClientModule, 
        CommonModule, 
        SharedModule
    ],
    exports: [UsersListComponent],
    entryComponents:[ 
        PaymentModalComponent, 
        SuccessModalComponent, 
        ErrorModalComponent ]
})
export class PaymentsModule {

}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { UsersListComponent } from "./users-list/users-list.component";
import { SharedModule } from "../shared/shared.module";
import { PaymentModalComponent } from "../shared/payment-modal/payment-modal.component";

@NgModule({
    declarations:[ UsersListComponent ],
    imports: [  
        HttpClientModule, 
        CommonModule, 
        SharedModule
    ],
    exports: [UsersListComponent],
    entryComponents:[ PaymentModalComponent ]
})
export class PaymentsModule {

}
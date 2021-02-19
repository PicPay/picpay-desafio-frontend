import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { UsersListComponent } from "./users-list/users-list.component";

@NgModule({
    declarations:[ UsersListComponent ],
    imports: [  HttpClientModule , CommonModule],
    exports: [UsersListComponent]
})
export class PaymentsModule {

}
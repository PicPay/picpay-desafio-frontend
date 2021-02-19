import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from "./payments/users-list/users-list.component";

const routes: Routes = [
    { path: '**', component: UsersListComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
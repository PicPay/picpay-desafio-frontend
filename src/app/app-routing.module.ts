import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SimpleModalModule } from "ngx-simple-modal";
import { PaymentComponent } from "./pages/payment/payment.component";
import { UserListComponent } from "./pages/user-list/user-list.component";

const routes: Routes = [
  { path: "", redirectTo: "userList", pathMatch: "full" },
  { path: "userList", component: UserListComponent },
  { path: "payment", component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SimpleModalModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Routes
import { UserComponent } from "./modules/user/user.component";

const routes: Routes = [
  { path: "", component: UserComponent },
  { path: ":userId", component: UserComponent },
  { path: "*", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

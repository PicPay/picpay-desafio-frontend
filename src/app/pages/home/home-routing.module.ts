import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { HomeResolve } from "./services/resolvers/home.resolve";

const routes: Routes = [
  { path: "", component: HomeComponent, resolve: { userData: HomeResolve } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

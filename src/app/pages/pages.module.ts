import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersPageComponent } from "./users-page/users-page.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [UsersPageComponent],
  imports: [CommonModule, PagesRoutingModule, HttpClientModule],
})
export class PagesModule {}
